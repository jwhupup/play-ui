<template>
  <div class="pl-checkbox" :class="{ 'is-disabled': disabled, 'is-indeterminate': indeterminate }">
    <input
      :id="id"
      class="pl-checkbox-input"
      :checked="modelValue"
      type="checkbox"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    >
    <label :for="id">{{ lable }}</label>
  </div>
</template>

<script setup lang="ts">
import { nanoid } from 'nanoid'
import { checkboxProps } from './checkbox'

defineProps(checkboxProps)

defineEmits(['update:modelValue'])

const id = `pl-checkbox__${nanoid(8)}`
</script>
