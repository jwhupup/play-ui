<template>
  <PlButton @click="handleClick">
    custom notification
  </PlButton>
</template>

<script setup lang="ts">
import { createVNode } from 'vue'

const handleClick = () => {
  PlNotification(() => createVNode('div', { class: 'bg-red' }, 'custom notification.'))
}
</script>
