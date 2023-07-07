<template>
  <div class="w-68">
    <PlDropdown
      ref="dropdown"
      trigger="click"
      :data="list"
    >
      <template #reference>
        <PlButton>
          dropdown
        </PlButton>
      </template>
    </PlDropdown>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { DropdownData } from 'play-ui'

const dropdown = ref()

const list = ref<DropdownData[]>([
  {
    name: 'has children',
    children: [
      { name: 'btn 1 1' },
      {
        name: 'btn 1 2',
        children: [
          { name: 'btn 1 1 1' },
          { name: 'btn 1 1 2' },
          { name: 'btn 1 1 3' },
        ],
      },
    ],
  },
  {
    name: 'with title,icon,badge,divider',
    title: 'Title',
    divider: true,
    button: {
      iconLeft: 'airplane',
      badge: {
        state: 'success',
      },
    },
  },
  {
    name: 'with callback',
    callback() {
      alert('with callback!')
    },
  },
])
</script>
