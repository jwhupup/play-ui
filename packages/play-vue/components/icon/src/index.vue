<template>
  <i class="bi" :class="[`bi-${name}`]" />
</template>

<script setup lang="ts">
import { iconProps } from '../src/icon'

defineProps(iconProps)
</script>
