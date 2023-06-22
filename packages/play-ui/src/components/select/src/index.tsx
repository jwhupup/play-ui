import { defineComponent, ref, watchEffect } from 'vue'
import Input from '../../input/src/base.vue'
import Dropdown from '../../dropdown'
import { useExpose, useOutside } from '../../../composables'
import type { SelectOption } from './select'
import { selectProps } from './select'

export default defineComponent({
  name: 'Select',
  props: selectProps,
  emits: ['update:modelValue'],
  setup(props, { slots, emit }) {
    const crrentValue = ref<SelectOption>()
    const selectValue = ref<SelectOption[]>([])
    const inputValue = ref('')
    const visible = ref(false)
    const selectEl = ref<HTMLElement>()

    useExpose({
      selectValue,
    })

    const { isOutside } = useOutside(selectEl, visible)
    watchEffect(() => isOutside.value && (visible.value = false))

    watchEffect(() => {
      if (!inputValue.value)
        selectValue.value.length = 0

      if (!crrentValue.value)
        return

      if (props.multiple) {
        selectValue.value.push(crrentValue.value)
        inputValue.value = selectValue.value.map(item => item.name).join()
      }
      else {
        selectValue.value = [crrentValue.value]
        inputValue.value = crrentValue.value.name
      }
      crrentValue.value = undefined
      emit('update:modelValue', selectValue.value)
    })

    const onClick = () => {
      visible.value = true
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
        v-slots={{
          reference() {
            return (
              <div ref={selectEl} onClick={onClick}>
                <Input
                  {..._props}
                  v-model={inputValue.value}
                  v-slots={slots}
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
