<template>
  <div
    ref="tagEl"
    class="pl-tag"
    :class="[`pl-tag--${type}`, `pl-tag--${shape}`, `pl-tag--${color}`]"
  >
    <i v-if="indicator" class="pl-tag--indicator" />
    <slot />
    <i v-if="closable" class="pl-tag--close" @click="handleClose">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <path
          fill="currentColor"
          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </i>
  </div>
</template>

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
