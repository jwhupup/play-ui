<template>
  <div class="w-full flex gap-2">
    <PlTooltip
      placement="left"
      content="This is tootip content!"
    >
      <template #reference>
        <PlButton>
          left
        </PlButton>
      </template>
    </PlTooltip>
    <PlTooltip
      placement="top"
      content="This is tootip content!"
    >
      <template #reference>
        <PlButton>
          top
        </PlButton>
      </template>
    </PlTooltip>
    <PlTooltip
      placement="right"
      content="This is tootip content!"
    >
      <template #reference>
        <PlButton>
          right
        </PlButton>
      </template>
    </PlTooltip>
    <PlTooltip
      placement="bottom"
      content="This is tootip content!"
    >
      <template #reference>
        <PlButton>
          bottom
        </PlButton>
      </template>
    </PlTooltip>
  </div>
</template>

<script setup lang="ts">

</script>
