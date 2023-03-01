<template>
  <component :is="is" ref="onClickOutsideEl">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { onClickOutside } from './on-click-outside'

withDefaults(defineProps<{ is?: string }>(), { is: 'div' })

const emits = defineEmits(['trigger'])

const onClickOutsideEl = ref<HTMLElement>()

onMounted(() =>
  onClickOutside(onClickOutsideEl.value!, (evt: Event) => emits('trigger', evt))
)
</script>
