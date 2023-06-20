<template>
  <div style="width: 200px;" :rules="{ require: true }">
    <PlInput v-model="value" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>
