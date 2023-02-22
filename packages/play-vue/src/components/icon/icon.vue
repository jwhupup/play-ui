<template>
  <i :class="[name]" />
</template>

<script setup lang="ts">
import { iconProps } from './icon'

defineProps(iconProps)
</script>
