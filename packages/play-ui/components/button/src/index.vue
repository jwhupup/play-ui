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
    <PlIcon v-if="iconLeft" class="pl-button-icon--left" :name="iconLeft" />
    <slot />
    <PlIcon v-if="iconRight" class="pl-button-icon--right" :name="iconRight" />
  </button>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue'
import { GROUP_BUTTON_KEY } from '../../button-group'
import { buttonProps } from '../src/button'
import PlIcon from '../../icon'

defineProps(buttonProps)

defineEmits(['click'])

defineOptions({ name: 'Button' })

const buttonEl = ref<HTMLButtonElement>()

const parent = inject(GROUP_BUTTON_KEY, null)

defineExpose({ el: buttonEl })
</script>
