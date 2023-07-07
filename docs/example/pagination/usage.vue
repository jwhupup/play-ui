<template>
  <div>
    <PlPagination ref="paginations" :count="count1" mode="ghost" shape="circle" />
    <br>
    <PlPagination ref="paginations" :count="count2" mode="outline" />
    <br>
    <pl-button-group size="mini" mode="outline">
      <pl-button @click="handlePrevClick">
        prev
      </pl-button>
      <pl-button @click="handleNextClick">
        next
      </pl-button>
      <pl-button @click="handleToggleClick">
        toggle
      </pl-button>
      <pl-button @click="handleAddClick">
        add step
      </pl-button>
      <pl-button @click="handleSubClick">
        sub step
      </pl-button>
    </pl-button-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { PaginationInstance } from 'play-ui'

const count1 = ref(8)
const count2 = ref(10)
const paginations = ref<PaginationInstance>()

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
  count1.value++
}
const handleSubClick = () => {
  count1.value--
}
</script>
