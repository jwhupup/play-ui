<template>
  <button
    ref="buttonEl"
    :type="nativeType"
    class="pl-button"
    :class="[
      `pl-button--${parent?.type || type}`,
      `pl-button--${parent?.size || size}`,
      `pl-button--${parent?.shape || shape}`,
      `pl-button--${parent?.color || color}`,
      { 'is-disabled': parent?.disabled || disabled },
    ]"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue'
import { GROUP_BUTTON_KEY } from '../../button-group'
import { buttonProps } from '../src/button'

defineProps(buttonProps)

const buttonEl = ref<HTMLButtonElement>()

const parent = inject(GROUP_BUTTON_KEY, null)

const emits = defineEmits(['click'])

const handleClick = (evt: MouseEvent) => {
  emits('click', evt)
}

defineExpose({
  el: buttonEl,
})
</script>
