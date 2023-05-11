<template>
  <div class="pl-button-group" :class="{ 'is-vertical': vertical }">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { GROUP_BUTTON_KEY, buttonGroupProps } from './button-group'

const props = defineProps(buttonGroupProps)

defineOptions({ name: 'ButtonGroup' })

provide(GROUP_BUTTON_KEY, props)
</script>
