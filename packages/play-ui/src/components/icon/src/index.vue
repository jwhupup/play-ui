<template>
  <i class="bi" :class="`bi-${name}`" @click="onClick" />
</template>

<script setup lang="ts">
import type { IconProps } from '../../component'

defineProps<IconProps>()
const emit = defineEmits(['click'])
defineOptions({ name: 'Icon' })

const onClick = (evt: MouseEvent) => emit('click', evt)
</script>
