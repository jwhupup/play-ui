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
    name: 'btn 1',
    divider: true,
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
    name: 'btn 2',
    title: 'Title',
    button: {
      iconLeft: 'airplane',
      badge: {
        state: 'success',
      },
    },
    callback() {
      alert('invoke callback!')
    },
  },
])
</script>
