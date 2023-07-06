<template>
  <PlButton @click="handleClick">
    custom message
  </PlButton>
</template>

<script setup lang="ts">
import { createVNode } from 'vue'

const handleClick = () => {
  PlMessage(() => createVNode('div', { class: 'bg-red' }, 'custom message.'))
}
</script>
