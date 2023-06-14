<template>
  <PlButton @click="handleClick">
    notification
  </PlButton>
  <PlAlert closable icon="x-lg" title="Alert title" description="23312321321" />
</template>

<script setup lang="ts">
import 'play-ui/styles/base.less'
import 'play-ui/components/notification/src/index.less'
import 'play-ui/components/alert/src/index.less'
import { PlNotification } from 'play-ui/index'

const handleClick = () => {
  PlNotification({
    title: 'App notifications',
    content: 'Notifications may include alerts, sounds and icon badges.',
  })
}
</script>
