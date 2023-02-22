<template>
  <PlTag type="outline" closable @close="handleClose">Tag</PlTag>
  <PlTag color="red" closable @close="handleClose">Tag</PlTag>
  <PlTag color="teal" shape="pilled" closable @close="handleClose">Tag</PlTag>
  <PlTag closable @close="handleClose">Tag</PlTag>
</template>

<script setup lang="ts">
const handleClose = () => {
  console.log('///tag handleClose///')
}
</script>
