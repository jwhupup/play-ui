<template>
  <div
    ref="alertEl"
    class="pl-alert"
    :class="[`pl-alert--${type}`, `pl-alert--${color}`]"
  >
    <pl-icon v-if="icon" :name="icon" />
    <div>
      <slot name="title" />
      <span v-if="!$slots.title && title" class="pl-alert--title">
        {{ title }}
      </span>
      <slot />
      <div v-if="!$slots.default && description" class="pl-alert--description">
        {{ description }}
      </div>
    </div>
    <pl-icon name="x-lg" @click="handleClose" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { alertProps } from './alert'

defineProps(alertProps)

const emits = defineEmits(['close'])

const alertEl = ref<HTMLDivElement>()

const handleClose = (evt: MouseEvent) => {
  alertEl.value?.parentElement?.removeChild(alertEl.value)
  emits('close', evt)
}
</script>
