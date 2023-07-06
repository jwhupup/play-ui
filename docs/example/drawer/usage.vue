<template>
  <PlDrawer ref="drawer">
    This is drawer default.
  </PlDrawer>
  <PlButton @click="handleClick">
    open drawer
  </PlButton>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref()

const handleClick = () => {
  drawer.value?.open()
}
</script>
