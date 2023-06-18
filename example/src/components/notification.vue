<template>
  <PlButton style="position: absolute; left: 50%;" @click="handleClick">
    notification
  </PlButton>
</template>

<script setup lang="ts">
import 'play-ui/styles/base.less'
import 'play-ui/components/notification/src/index.less'
import { PlNotification } from 'play-ui'

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
