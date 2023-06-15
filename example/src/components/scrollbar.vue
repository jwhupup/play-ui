<template>
  <div style="position: relative; width: 800px; top: 200px; left: 10%; border: 1px solid #4c4e50;">
    <PlScrollbar ref="scrollbar">
      <div v-for="(item, index) in list" :key="index">
        <h3>
          {{ `${index + 1}.` }}
        </h3>
        <span>
          {{ item }}
        </span>
      </div>
    </PlScrollbar>
  </div>
  <PlButton @click="handleScroll">
    scroll
  </PlButton>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { faker } from '@faker-js/faker'
import type { ScrollbarInstance } from 'play-ui'

const scrollbar = ref<ScrollbarInstance>()
const list = ref(Array(100).fill(null).map(_ => faker.lorem.sentences()))

const handleScroll = () => {
  scrollbar.value?.scrollto({
    top: 1000,
    behavior: 'smooth',
  })
}
</script>
