<template>
  <PlBreadcrumb ref="breadcrumb" v-model="steps" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const breadcrumb = ref()

const steps = ref([
  {
    name: 'page1',
    icon: 'basket2',
  },
  {
    name: 'page2',
    icon: 'bandaid',
  },
  {
    name: 'page3',
  },
])
</script>
