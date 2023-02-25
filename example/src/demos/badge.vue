<template>
  <demo-block title="value">
    <PlBadge :value="6">
      <pl-button>button</pl-button>
    </PlBadge>
    <br /><br />
    <PlBadge value="99">
      <pl-button type="soft">button</pl-button>
    </PlBadge>
  </demo-block>
  <demo-block title="color">
    <PlBadge value="99" dot>badge</PlBadge>
    <br /><br />
    <PlBadge color="red" dot>dot</PlBadge>
  </demo-block>
</template>

<script setup lang="ts">
import 'play-vue/src/styles/base.less'
import 'play-vue/src/styles/components/badge.less'
import PlBadge from 'play-vue/src/components/badge/index'
</script>
