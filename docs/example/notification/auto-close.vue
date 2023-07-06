<template>
  <PlButton @click="handleClick">
    notification
  </PlButton>
</template>

<script setup lang="ts">
const handleClick = () => {
  PlNotification({
    title: 'App notifications',
    content: 'Do not automatically close.',
    autoClose: false,
    onCancel() {
      alert('Cancel')
    },
    onConfirm(notify) {
      notify.close()
    },
  })
}
</script>
