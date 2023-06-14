<template>
  <PlButton style="position: absolute; left: 50%; top: 50%;" @click="handleClick">
    message
  </PlButton>
</template>

<script setup lang="ts">
import 'play-ui/styles/base.less'
import 'play-ui/components/alert/src/index.less'
import 'play-ui/components/message/src/index.less'
import { PlMessage } from 'play-ui/index'

const handleClick = () => {
  ['info', 'success', 'warning', 'danger'].forEach((item) => {
    PlMessage({
      state: item as 'info' | 'success' | 'warning' | 'danger',
      content: 'Notifications may include alerts, sounds and icon badges, sounds and icon badges',
    })
  })
}
</script>
