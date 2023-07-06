<template>
  <div class="flex gap-2">
    <PlPopover
      title="Popover Title"
      content="This is popover content!"
    >
      <template #reference>
        <PlButton>
          hover
        </PlButton>
      </template>
    </PlPopover>
    <PlPopover
      trigger="click"
      title="Popover Title"
      content="This is popover content!"
    >
      <template #reference>
        <PlButton>
          click
        </PlButton>
      </template>
    </PlPopover>
    <PlPopover
      :trigger="trigger"
      title="Popover Title"
      content="This is popover content!"
    >
      <template #reference>
        <PlButton @click="handleClick">
          boolean
        </PlButton>
      </template>
    </PlPopover>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const trigger = ref(false)

const handleClick = () => {
  trigger.value = !trigger.value
}
</script>
