<template>
  <PlDrawer ref="drawer" :shake-off="['mask']">
    This is drawer default.
  </PlDrawer>
  <PlButton @click="handleClick">
    open drawer without mask
  </PlButton>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref()

const handleClick = () => {
  drawer.value?.open()
}
</script>
