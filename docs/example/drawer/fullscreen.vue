<template>
  <PlDrawer ref="drawer" fullscreen>
    This is drawer default.
  </PlDrawer>
  <PlButton @click="handleClick">
    open fullscreen drawer
  </PlButton>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref()

const handleClick = () => {
  drawer.value?.open()
}
</script>
