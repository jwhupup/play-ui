<template>
  <PlPopover
    title="Popover Title"
    content="This is popover content!"
  >
    <template #reference>
      <PlButton>
        popover
      </PlButton>
    </template>
    <template #headless>
      <div class="text-white bg-red">
        This is custom popover!
      </div>
    </template>
  </PlPopover>
</template>

<script setup lang="ts">

</script>
