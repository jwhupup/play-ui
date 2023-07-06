<template>
  <PlDrawer ref="drawer">
    <template #headless>
      <div class=" w-full h-screen bg-red text-white">
        This is drawer headless.
      </div>
    </template>
  </PlDrawer>
  <PlButton @click="handleClick">
    open custom drawer
  </PlButton>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref()

const handleClick = () => {
  drawer.value?.open()
}
</script>
