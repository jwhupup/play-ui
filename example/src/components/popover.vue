<template>
  <PlPopover
    ref="popover"
    title="Popover Title"
    content="This is popover content!"
    style="position: absolute; top: 50%; left: 50%;"
  >
    <template #reference>
      <PlButton>
        popover
      </PlButton>
    </template>
    <!-- <template #default>
      This is popover!
    </template> -->
  </PlPopover>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const popover = ref()
</script>
