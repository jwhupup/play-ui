<template>
  <div ref="menuEl" class="pl-table-menu" style="">
    <div>固定</div>
    <div>复制</div>
    <div>编辑</div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const props = defineProps<{
  position: {
    x: number
    y: number
  }
  target: HTMLElement | undefined
}>()

const menuEl = ref<HTMLElement>()

watchEffect(() => {
  if (menuEl.value) {
    menuEl.value.style.left = `${props.position.x}px`
    menuEl.value.style.top = `${props.position.y}px`
  }
})
</script>
