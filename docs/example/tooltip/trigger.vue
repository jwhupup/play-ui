<template>
  <div class="flex gap-2">
    <PlTooltip
      content="This is tootip content!"
    >
      <template #reference>
        <PlButton>
          hover
        </PlButton>
      </template>
    </PlTooltip>
    <PlTooltip
      trigger="click"
      content="This is tootip content!"
    >
      <template #reference>
        <PlButton>
          click
        </PlButton>
      </template>
    </PlTooltip>
  </div>
</template>

<script setup lang="ts">

</script>
