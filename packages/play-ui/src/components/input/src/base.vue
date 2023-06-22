<template>
  <div
    class="pl-input-container"
    :class="`pl-input--${size}`"
  >
    <div v-if="$slots.prepend" class="__prepend">
      <slot name="prepend" />
    </div>
    <div
      class="pl-input-wrapper"
      :class="[
        `pl-input--${mode}`,
        `pl-input--${state}`,
        isFocus && 'is-focus',
      ]"
      :style="inputStyle"
      tabindex="0"
    >
      <div v-if="prefixIcon" class="__prefix">
        <Icon :name="prefixIcon" />
      </div>
      <input
        ref="inputEl"
        class="pl-input"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        v-bind="$attrs"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
      >
      <div
        v-if="suffixIcon || clearable"
        class="__suffix"
        @click="handleClearable"
      >
        <Icon :name="modelValue ? 'x-circle' : suffixIcon ?? ''" />
      </div>
    </div>
    <div class="pl-input-tip">
      {{ tip }}
    </div>
    <div v-if="$slots.append" class="__append">
      <slot name="append" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, useSlots, watchEffect } from 'vue'
import Icon from '../../icon'
import { inputProps } from './input'

const props = defineProps(inputProps)
const emit = defineEmits(['update:modelValue', 'blur'])
defineOptions({ name: 'Input' })

const slots = useSlots()
const verify = ref(false)
const state = ref('primary')
const tip = ref(props.infoTip)
const isFocus = ref(false)
const inputEl = ref<HTMLInputElement>()
const inputStyle = computed(() => {
  return {
    borderTopLeftRadius: slots.prepend && 0,
    borderBottomLeftRadius: slots.prepend && 0,
    borderTopRightRadius: slots.append && 0,
    borderBottomRightRadius: slots.append && 0,
  }
})

watchEffect(() => {
  const value = props.modelValue.toString()

  if (value && props.pattern) {
    verify.value = props.pattern.test(value)

    if (verify.value) {
      state.value = 'success'
      tip.value = props.successTip
    }
    else if (!verify.value) {
      state.value = 'error'
      tip.value = props.errorTip
    }
  }
  else {
    state.value = 'primary'
    tip.value = props.infoTip
  }
})

const handleFocus = () => {
  isFocus.value = true
}

const handleClearable = (evt: MouseEvent) => {
  if (props.modelValue)
    evt.stopPropagation()

  if (props.clearable) {
    inputEl.value?.focus()
    emit('update:modelValue', '')
  }
}

const handleInput = () => {
  emit('update:modelValue', inputEl.value?.value)
}

const handleBlur = (evt: FocusEvent) => {
  emit('blur', evt)
  isFocus.value = false
}
</script>
