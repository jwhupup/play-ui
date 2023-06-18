<template>
  <div style="height: 500px; padding: 30px;">
    <PlBreadcrumb ref="breadcrumb" v-model="steps" />

    <button @click="handlePrevClick">
      prev
    </button>
    <button @click="handleNextClick">
      next
    </button>
    <button @click="handleToggleClick">
      toggle
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const breadcrumb = ref()

const steps = ref([
  {
    name: 'page1',
  },
  {
    name: 'page2',
  },
  {
    name: 'page3',
  },
])

const handlePrevClick = () => {
  breadcrumb.value?.prev()
}

const handleNextClick = () => {
  breadcrumb.value?.next()
}

const handleToggleClick = () => {
  breadcrumb.value?.toggle(2)
}
</script>
