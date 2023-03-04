<script setup lang="ts">
import { ref } from 'vue'
import { tagProps } from './tag'

defineProps(tagProps)

const emits = defineEmits(['close'])

const tagEl = ref<HTMLDivElement>()

const handleClose = (evt: MouseEvent) => {
  tagEl.value?.parentNode?.removeChild(tagEl.value)
  emits('close', evt)
}
</script>

<template>
  <div
    ref="tagEl"
    class="pl-tag"
    :class="[`pl-tag--${type}`, `pl-tag--${shape}`, `pl-tag--${color}`]"
  >
    <i v-if="indicator" class="pl-tag--indicator" />
    <slot />
    <pl-icon
      v-if="closable"
      class="pl-tag--close"
      name="x-lg"
      @click="handleClose"
    />
  </div>
</template>
