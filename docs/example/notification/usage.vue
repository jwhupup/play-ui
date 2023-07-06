<template>
  <PlButton @click="handleClick">
    notification
  </PlButton>
</template>

<script setup lang="ts">
const handleClick = () => {
  PlNotification({
    title: 'App notifications',
    content: 'Notifications may include alerts, sounds and icon badges.',
    cancelButtonText: 'Cancel',
    confirmButtonText: 'Ok',
    onCancel() {
      alert('Cancel')
    },
    onConfirm(notify) {
      notify.close()
    },
  })
}
</script>
