import { defineComponent, ref, watch, watchEffect } from 'vue'
import Input from '../../input/src/base.vue'
import Dropdown from '../../dropdown'
import { useExpose, useOutside } from '../../../composables'
import Tag from '../../tag'
import type { SelectOption } from './select'
import { selectProps } from './select'

export default defineComponent({
  name: 'Select',
  props: selectProps,
  emits: ['update:modelValue'],
  setup(props, { slots, emit }) {
    const visible = ref(false)
    const inputValue = ref('')
    const selectEl = ref<HTMLElement>()
    const crrentValue = ref<SelectOption>()
    const selectValue = ref<Map<string, SelectOption>>(new Map())

    useExpose({
      selectValue,
    })

    const { isOutside } = useOutside(selectEl, visible)
    watchEffect(() => isOutside.value && (visible.value = false))

    watch(inputValue, (value) => {
      if (!value)
        selectValue.value.clear()
    })

    watch(selectValue.value, (value) => {
      inputValue.value = Array.from(value.keys()).join()
      emit('update:modelValue', Array.from(value.values()))
    })

    const onSelectClick = () => {
      visible.value = true
    }

    const onSelectOptionClick = (option: SelectOption) => {
      selectValue.value.set(option.name, option)
    }

    const onTagClose = (name: string) => {
      return (evt: MouseEvent) => {
        evt.stopPropagation()
        selectValue.value.delete(name)
      }
    }

    const _props = {
      mode: props.mode,
      size: props.size,
      infoTip: props.infoTip,
      prefixIcon: props.prefixIcon,
      suffixIcon: props.suffixIcon,
      placeholder: props.placeholder,
      disabled: props.disabled,
      clearable: props.clearable,
    }

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
                  {..._props}
                  v-model={inputValue.value}
                  suffix-icon='chevron-down'
                  v-slots={{
                    ...slots,
                    selectWrapper() {
                      return (
                        <div class='pl-select-wrapper'>
                          {
                            Array.from(selectValue.value.values()).map(item => (
                              <Tag
                                closable
                                onClose={onTagClose(item.name)}
                              >
                                {item.name}
                              </Tag>
                            ))
                          }
                        </div>
                      )
                    },
                  }}
                />
              </div>
            )
          },
        }}
      />
    )
  },
})
