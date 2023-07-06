<template>
  <div class="flex gap-2">
    <PlTooltip
      content="This is tooltip content!"
    >
      <template #reference>
        <PlButton>
          tooltip
        </PlButton>
      </template>
    </PlTooltip>
  </div>
</template>

<script setup lang="ts">

</script>
