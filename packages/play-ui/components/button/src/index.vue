<template>
  <button
    ref="buttonEl"
    :type="nativeType"
    class="pl-button"
    :class="[
      `__${parent?.type || type}`,
      `__${parent?.state || state}`,
      `__${parent?.shape || shape}`,
      `__${parent?.size || size}`,
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
