<template>
  <div :class="[vertical ? 'pl-button-group--vertical' : 'pl-button-group']">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { GROUP_BUTTON_KEY, buttonGroupProps } from './options'

const props = defineProps(buttonGroupProps)

provide(GROUP_BUTTON_KEY, props)
</script>
