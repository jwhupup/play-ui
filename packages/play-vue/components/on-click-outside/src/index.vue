<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

withDefaults(defineProps<{ is?: string }>(), { is: 'div' })

const emits = defineEmits(['trigger'])

const onClickOutsideEl = ref<HTMLElement>()

onMounted(() =>
  onClickOutside(onClickOutsideEl.value, evt => emits('trigger', evt)),
)
</script>

<template>
  <component :is="is" ref="onClickOutsideEl" class="pl-on-click-outside">
    <slot />
  </component>
</template>
