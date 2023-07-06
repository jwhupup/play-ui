<template>
  <div class="flex gap-2">
    <PlButton @click="handleClick('info')">
      info
    </PlButton>
    <PlButton @click="handleClick('success')">
      success
    </PlButton>
    <PlButton @click="handleClick('warning')">
      warning
    </PlButton>
    <PlButton @click="handleClick('danger')">
      danger
    </PlButton>
  </div>
</template>

<script setup lang="ts">
const handleClick = (state: string) => {
  PlMessage({
    state,
    content: 'This is message content.',
  })
}
</script>
