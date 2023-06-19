<template>
  <PlDropdown
    ref="dropdown"
    trigger="hover"
    :data="list"
    style="position: absolute; top: 50%; left: 50%;"
  >
    <template #reference>
      <PlButton>
        dropdown
      </PlButton>
    </template>
  </PlDropdown>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import 'play-ui/src/components/badge/src/index.less'
import 'play-ui/src/components/Popover/src/index.less'
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
    divider: true,
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
