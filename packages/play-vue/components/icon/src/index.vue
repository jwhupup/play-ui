<template>
  <i class="bi" :class="name" />
</template>

<script setup lang="ts">
import { iconProps } from '../src/icon'

defineProps(iconProps)
</script>
