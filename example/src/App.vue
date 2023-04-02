<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isDark = ref(false)

onMounted(() => {
  isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
})

const toggleTheme = () => {
  const html = document.documentElement
  if (html.getAttribute('data-theme') === 'light') {
    html.setAttribute('data-theme', 'dark')
    isDark.value = true
  }
  else {
    html.setAttribute('data-theme', 'light')
    isDark.value = false
  }
}
</script>

<template>
  <PlButton class="absolute top-3 right-3" size="mini" shape="circle" type="ghost" @click="toggleTheme">
    <PlIcon v-if="isDark" name="bi-sun" />
    <PlIcon v-else name="bi-moon" />
  </PlButton>
  <Components />
</template>
