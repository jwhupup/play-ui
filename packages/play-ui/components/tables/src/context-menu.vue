<template>
  <div>
    <slot />
    <div ref="menuEl" class="pl-menu">
      <PlButton v-for="item in menus" :key="item" size="small" type="ghost" state="info">
        {{ item }}
      </PlButton>
    </div>
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

const menus = ['home', 'message', 'cart', 'blog', 'design']

watchEffect(() => {
  if (menuEl.value) {
    menuEl.value.style.left = `${props.position.x}px`
    menuEl.value.style.top = `${props.position.y}px`
  }
})
</script>

<style scoped lang="less">
.pl-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 8px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 234px;
  background-color: white;
  border-radius: 8px;
  border: 1px solid #E5E7EB;
  box-shadow: 0px 10px 8px rgba(0, 0, 0, 0.04), 0px 4px 3px rgba(0, 0, 0, 0.1);

  .pl-button {
    text-align: left;
  }
}
</style>
