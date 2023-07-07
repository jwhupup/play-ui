<template>
  <div class="w-full light:text-black dark:text-white">
    <PlVirtualList
      :list-height="400"
      :list-item-count="list.length"
      :estimated-list-item-height="50"
    >
      <PlVirtualListItem v-for="(item, index) in list" :key="index">
        <div class="p-2">
          {{ item }}
        </div>
      </PlVirtualListItem>
    </PlVirtualList>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { faker } from '@faker-js/faker'

const list = ref(
  Array(10000)
    .fill(null)
    .map(_ => faker.lorem.sentences()),
)
</script>
