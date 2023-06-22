import type { StyleValue } from 'vue'
import { computed, defineComponent, ref, watch, watchEffect } from 'vue'
import Input from '../../input/src/base.vue'
import Dropdown from '../../dropdown'
import { useExpose, useOutside } from '../../../composables'
import Tag from '../../tag'
import { unrepeatObjectArray } from '../../../utils'
import type { SelectOption } from './select'
import { selectProps } from './select'

export default defineComponent({
  name: 'Select',
  props: selectProps,
  emits: ['update:modelValue'],
  setup(props, { slots }) {
    const visible = ref(false)
    const inputValue = ref('')
    const selectEl = ref<HTMLElement>()
    const crrentValue = ref<SelectOption>()
    const selectValue = ref<SelectOption[]>([])

    useExpose({
      selectValue,
    })

    const { isOutside } = useOutside(selectEl, visible)
    watchEffect(() => isOutside.value && (visible.value = false))

    watch(inputValue, (value) => {
      if (!value)
        selectValue.value.length = 0
    })

    const onSelectClick = () => {
      visible.value = true
    }

    const onSelectOptionClick = (option: SelectOption) => {
      if (props.multiple) {
        selectValue.value.push(option)
        selectValue.value = unrepeatObjectArray(selectValue.value, 'name')
        inputValue.value = selectValue.value.map(option => option.name).join()
      }
      else {
        selectValue.value = [option]
        inputValue.value = option.name
      }
    }

    const onTagClose = (index: number) => {
      return (evt: MouseEvent) => {
        evt.stopPropagation()
        selectValue.value.splice(index, 1)
      }
    }

    const resolveProps = ref({
      mode: props.mode,
      size: props.size,
      infoTip: props.infoTip,
      prefixIcon: props.prefixIcon,
      suffixIcon: props.suffixIcon,
      placeholder: props.placeholder,
      disabled: props.disabled,
      clearable: props.clearable,
    })

    const resolveSlots = computed(() => {
      if (!props.multiple)
        return slots

      const wrapperStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: '5px 10px',
        gap: '5px',
        width: '100%',
        height: '100%',
        cursor: 'pointer',
      } as StyleValue

      return {
        ...slots,
        selectWrapper() {
          return (
            <div style={wrapperStyle}>
              {
                selectValue.value.map((option, index) => (
                  <Tag
                    closable
                    onClose={onTagClose(index)}
                  >
                    {option.name}
                  </Tag>
                ))
              }
            </div>
          )
        },
      }
    })

    return () => (
      <Dropdown
        trigger={visible.value}
        data={props.options}
        v-model={crrentValue.value}
        onClick={onSelectOptionClick}
        v-slots={{
          reference() {
            return (
              <div ref={selectEl} onClick={onSelectClick}>
                <Input
                  {...resolveProps.value}
                  v-model={inputValue.value}
                  v-slots={resolveSlots.value}
                  suffix-icon='chevron-down'
                />
              </div>
            )
          },
        }}
      />
    )
  },
})
