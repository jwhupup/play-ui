<template>
  <PlDrawer ref="drawer" :placement="placement">
    This is drawer default.
  </PlDrawer>
  <div class="flex gap-2">
    <PlButton @click="handleClick('top')">
      top
    </PlButton>
    <PlButton @click="handleClick('right')">
      right
    </PlButton>
    <PlButton @click="handleClick('bottom')">
      bottom
    </PlButton>
    <PlButton @click="handleClick('left')">
      left
    </PlButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref()
const placement = ref('')

const handleClick = (p: string) => {
  placement.value = p
  drawer.value?.open()
}
</script>
