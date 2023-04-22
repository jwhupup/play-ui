<template>
  <div class="pl-checkbox" :class="{ 'is-disabled': disabled, 'is-indeterminate': indeterminate }">
    <input
      :id="id"
      class="pl-checkbox-input"
      :checked="modelValue"
      type="checkbox"
      @change="handleChange"
    >
    <label :for="id">{{ lable }}</label>
  </div>
</template>

<script setup lang="ts">
import { nanoid } from 'nanoid'
import { checkboxProps } from './checkbox'

const props = defineProps(checkboxProps)

const emit = defineEmits(['update:modelValue', 'change'])

const id = `pl-checkbox__${nanoid(8)}`

const handleChange = (evt: Event) => {
  const isChecked = (evt.target as HTMLInputElement).checked
  emit('update:modelValue', isChecked)
  emit('change', isChecked, props.value)
}
</script>
