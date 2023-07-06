<template>
  <PlTooltip
    content="This is tooltip content!"
  >
    <template #reference>
      <PlButton>
        tooltip
      </PlButton>
    </template>
    <template #headless>
      <div class="text-white bg-red">
        This is custom tooltip!
      </div>
    </template>
  </PlTooltip>
</template>

<script setup lang="ts">

</script>
