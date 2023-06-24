<template>
  <PlButton style="position: absolute; left: 50%;" @click="handleClick">
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
    autoClose: true,
    onCancel() {
      alert('Cancel')
    },
    onConfirm(notify) {
      notify.close()
    },
  })
}
</script>
