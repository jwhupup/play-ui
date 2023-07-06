<template>
  <div class="pl-button-group" :class="{ 'is-vertical': vertical }">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { GROUP_BUTTON_KEY } from '..'
import type { ButtonGroupProps } from '.'

const props = withDefaults(defineProps<ButtonGroupProps>(), {
  mode: 'solid',
  state: 'primary',
  size: 'medium',
  shape: 'rounded',
})

defineOptions({ name: 'ButtonGroup' })

provide(GROUP_BUTTON_KEY, props)
</script>
