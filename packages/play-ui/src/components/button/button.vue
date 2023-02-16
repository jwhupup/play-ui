<template>
  <button
    :type="nativeType"
    class="pl-button"
    :class="[
      `pl-button--${parent?.type || type}`,
      `pl-button--${parent?.size || size}`,
      `pl-button--${parent?.shape || shape}`,
      `pl-button--${parent?.color || color}`,
      { 'is-disabled': parent?.disabled || disabled },
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { GROUP_BUTTON_KEY } from '../button-group/options'
import { buttonProps } from './options'

defineProps(buttonProps)

const parent = inject(GROUP_BUTTON_KEY, null)
</script>
