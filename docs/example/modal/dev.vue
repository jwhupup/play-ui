<template>
  <div space-y-2 w-full>
    <pl-modal v-model="visible" />
    <pl-button @click="visible = true">open modal</pl-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>
