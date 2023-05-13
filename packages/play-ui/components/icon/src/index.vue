<template>
  <i class="bi" :class="name" />
</template>

<script setup lang="ts">
import type { IconProps } from '../../component'

defineProps<IconProps>()

defineOptions({ name: 'Icon' })
</script>
