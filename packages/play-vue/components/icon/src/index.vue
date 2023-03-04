<template>
  <i :class="['bi', `bi-${name}`]" />
</template>

<script setup lang="ts">
import { iconProps } from '../src/icon'

defineProps(iconProps)
</script>
