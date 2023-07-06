<template>
  <div class="flex gap-2">
    <PlPopover
      placement="top"
      title="Popover Title"
      content="This is popover content!"
    >
      <template #reference>
        <PlButton>
          top
        </PlButton>
      </template>
    </PlPopover>
    <PlPopover
      placement="right"
      title="Popover Title"
      content="This is popover content!"
    >
      <template #reference>
        <PlButton>
          right
        </PlButton>
      </template>
    </PlPopover>
    <PlPopover
      placement="bottom"
      title="Popover Title"
      content="This is popover content!"
    >
      <template #reference>
        <PlButton>
          bottom
        </PlButton>
      </template>
    </PlPopover>
    <PlPopover
      placement="left"
      title="Popover Title"
      content="This is popover content!"
    >
      <template #reference>
        <PlButton>
          left
        </PlButton>
      </template>
    </PlPopover>
  </div>
</template>

<script setup lang="ts">

</script>
