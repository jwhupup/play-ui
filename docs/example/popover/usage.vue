<template>
  <div class="flex gap-2">
    <PlPopover
      title="Popover Title"
      content="This is popover content!"
    >
      <template #reference>
        <PlButton>
          props method
        </PlButton>
      </template>
    </PlPopover>
    <PlPopover>
      <template #reference>
        <PlButton>
          default slot method
        </PlButton>
      </template>
      <template #default>
        This is popover!
      </template>
    </PlPopover>
  </div>
</template>

<script setup lang="ts">

</script>
