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
    @click="$emit('click', $event)"
  >
    <Icon v-if="iconLeft" :class="{ 'icon-left': $slots.default }" :name="iconLeft" />
    <slot />
    <Icon v-if="iconRight" :class="{ 'icon-righ': $slots.default }" :name="iconRight" />
  </button>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue'
import Icon from '../../icon/src/index.vue'
import { GROUP_BUTTON_KEY } from '../../button-group'
import type { ButtonProps } from './type'

withDefaults(defineProps<ButtonProps>(), {
  type: 'solid',
  nativeType: 'button',
  state: 'primary',
  size: 'medium',
  shape: 'rounded',
})

defineEmits(['click'])

defineOptions({ name: 'Button' })

const buttonEl = ref<HTMLButtonElement>()

const parent = inject(GROUP_BUTTON_KEY, null)
</script>
