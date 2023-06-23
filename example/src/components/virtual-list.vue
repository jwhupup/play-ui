<template>
  <div style="position: relative; width: 800px;">
    <PlVirtualList
      :list-height="800"
      :list-item-count="list.length"
      :estimated-list-item-height="50"
    >
      <PlVirtualListItem v-for="(item, index) in list" :key="index">
        <div style="color: #fff; box-sizing: border-box; padding: 5px">
          {{ item }}
        </div>
      </PlVirtualListItem>
    </PlVirtualList>
  </div>
  <PlScrollbar v-show="false" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { faker } from '@faker-js/faker'

const list = ref(
  Array(1000)
    .fill(null)
    .map(_ => faker.lorem.sentences()),
)
</script>
