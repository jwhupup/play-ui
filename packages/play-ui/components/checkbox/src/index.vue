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
import { v4 as uuidv4 } from 'uuid'
import type { CheckboxProps } from '../../component'

const props = defineProps<CheckboxProps>()

const emit = defineEmits(['update:modelValue', 'change'])

defineOptions({ name: 'Checkbox' })

const id = `pl-checkbox__${uuidv4()}`

const handleChange = (evt: Event) => {
  const isChecked = (evt.target as HTMLInputElement).checked
  emit('update:modelValue', isChecked)
  emit('change', isChecked, props.value)
}
</script>
