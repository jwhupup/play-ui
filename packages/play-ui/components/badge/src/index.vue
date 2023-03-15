<template>
  <div class="pl-badge-container">
    <slot />
    <div
      class="pl-badge"
      :class="[
        {
          'pl-badge--dot': !value || dot,
          'pl-badge--position': $slots.default,
          'is-hidden': hidden,
        },
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
  if (Number(props.value) >= props.max)
    return `${props.max}+`

  return props.value
})
</script>
