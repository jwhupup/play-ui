<template>
  <div style="height: 500px; padding: 30px;">
    <PlPagination ref="paginations" :count="count" mode="ghost" shape="circle" />

    <button @click="handlePrevClick">
      prev
    </button>
    <button @click="handleNextClick">
      next
    </button>
    <button @click="handleToggleClick">
      toggle
    </button>
    <button @click="handleAddClick">
      add step
    </button>
    <button @click="handleSubClick">
      sub step
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(10)
const paginations = ref()

const handlePrevClick = () => {
  paginations.value?.prev()
}

const handleNextClick = () => {
  paginations.value?.next()
}

const handleToggleClick = () => {
  paginations.value?.toggle(2)
}
const handleAddClick = () => {
  count.value++
}
const handleSubClick = () => {
  count.value--
}
</script>
