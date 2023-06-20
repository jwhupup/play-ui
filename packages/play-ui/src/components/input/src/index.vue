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
import type { Rules } from 'async-validator'
import Schema from 'async-validator'
import { inputProps } from '.'

const props = defineProps(inputProps)
const emit = defineEmits(['update:modelValue', 'blur'])

defineOptions({ name: 'Input' })

const inputEl = ref<HTMLInputElement>()
const isShowTip = ref(false)
const tipMessage = ref('Please enter a valid value.')

const descriptor: Rules = {
  value: {
    type: 'string',
    required: true,
    message: 'This is error message!',
    validator: (rule, value) => value === 'muji',
  },
}
const validator = new Schema(descriptor)

const handleBlur = (evt: Event) => {
  emit('blur', evt)

  validator.validate({ value: props.modelValue }, (errors) => {
    if (errors) {
      tipMessage.value = errors.find(error => error.field === 'value')?.message ?? 'This is default message!'
      return isShowTip.value = true
    }
    isShowTip.value = false
  })
}
</script>
