<template>
  <div class="pl-button-group" :class="{ 'is-vertical': vertical }">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import type { ButtonGroupProps } from '../../component'
import { GROUP_BUTTON_KEY } from '..'

const props = withDefaults(defineProps<ButtonGroupProps>(), {
  type: 'solid',
  state: 'info',
  size: 'medium',
  shape: 'rounded',
})

defineOptions({ name: 'ButtonGroup' })

provide(GROUP_BUTTON_KEY, props)
</script>
