<template>
  <PlButton @click="handleClick">
    open message
  </PlButton>
</template>

<script setup lang="ts">
const handleClick = () => {
  PlMessage({
    closable: false,
    content: 'This is message content.',
  })
}
</script>
