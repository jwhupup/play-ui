<template>
  <button
    ref="buttonEl"
    :type="nativeType"
    class="pl-button"
    :class="[
      `pl-button--${parent?.type || type}`,
      `pl-button--${parent?.state || state}`,
      `pl-button--${parent?.shape || shape}`,
      `pl-button--${parent?.size || size}`,
      disabled && 'is-disabled',
    ]"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue'
import { GROUP_BUTTON_KEY } from '../../button-group'
import { buttonProps } from '../src/button'

defineProps(buttonProps)

defineEmits(['click'])

const buttonEl = ref<HTMLButtonElement>()

const parent = inject(GROUP_BUTTON_KEY, null)

defineExpose({
  el: buttonEl,
})
</script>
