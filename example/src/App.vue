<script setup lang="ts">
const toggleTheme = () => {
  const html = document.documentElement
  if (html.getAttribute('data-theme') === 'light')
    html.setAttribute('data-theme', 'dark')
  else
    html.setAttribute('data-theme', 'light')
}
</script>

<template>
  <div class="card">
    <PlButton @click="toggleTheme">
      toggle-theme
    </PlButton>
  </div>
</template>
