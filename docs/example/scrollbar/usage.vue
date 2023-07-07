<template>
  <div class="block dark:text-white">
    <PlScrollbar ref="scrollbar" :height="400">
      <div v-for="(item, index) in list" :key="index">
        {{ `${index + 1}. ${item}` }}
      </div>
    </PlScrollbar>
    <br>
    <PlButton @click="handleScroll">
      smooth scroll
    </PlButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { faker } from '@faker-js/faker'
import type { ScrollbarInstance } from 'play-ui'

const scrollbar = ref<ScrollbarInstance>()
const list = ref(Array(50).fill(null).map(_ => faker.lorem.sentences()))

const handleScroll = () => {
  scrollbar.value?.scrollto({
    top: 300,
    behavior: 'smooth',
  })
}
</script>
