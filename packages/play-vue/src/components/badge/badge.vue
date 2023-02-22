<template>
  <div class="pl-badge-container">
    <slot />
    <div
      class="pl-badge"
      :class="[
        dot && 'pl-badge--dot',
        hidden && 'is-hidden',
        `pl-badge--${color}`,
      ]"
    >
      {{ dot ? '' : bagdeValue }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { badgeProps } from './badge'

const props = defineProps(badgeProps)

const bagdeValue = computed(() => {
  if (Number(props.value) >= props.max) {
    return `${props.max}+`
  }
  return props.value
})
</script>
