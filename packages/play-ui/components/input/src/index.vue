<template>
  <div>
    <input
      ref="inputEl"
      class="pl-input"
      :class="[
        `pl-input--${type}`,
        `pl-input--${size}`,
        { 'is-disabled': disabled },
      ]"
      title=""
      :type="nativeType"
      :value="modelValue"
      :placeholder="placeholder"
      @blur="handleBlur"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
    <div v-show="isShowTip" class="pl-input-tip">
      {{ tipMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { inputProps } from './input'

const props = defineProps(inputProps)
const emit = defineEmits(['update:modelValue', 'blur'])

const inputEl = ref<HTMLInputElement>()
const isShowTip = ref(false)
const tipMessage = ref('Please enter a valid value.')

const handleBlur = (evt: Event) => {
  emit('blur', evt)

  if (props.rule?.message)
    tipMessage.value = props.rule?.message

  if (props.rule?.require && !props.modelValue)
    isShowTip.value = !props.modelValue

  if (props.rule?.pattern && props.modelValue)
    isShowTip.value = !props.rule?.pattern.test(String(props.modelValue))
}

defineExpose({
  el: inputEl,
})
</script>
