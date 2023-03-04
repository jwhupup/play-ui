<script setup lang="ts">
import { iconProps } from '../src/icon'

defineProps(iconProps)
</script>

<template>
  <i class="bi" :class="[`bi-${name}`]" />
</template>
