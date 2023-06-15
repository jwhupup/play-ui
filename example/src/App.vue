<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue'

const isDark = ref(false)
const html = ref<HTMLElement>()

onMounted(() => {
  isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  html.value = document.documentElement
})

watchEffect(() => {
  if (isDark.value)
    html.value?.setAttribute('data-theme', 'dark')
  else
    html.value?.setAttribute('data-theme', 'light')
})
</script>

<template>
  <PlButton class="absolute top-3 right-3" size="mini" shape="circle" type="ghost" @click="isDark = !isDark">
    <PlIcon v-if="isDark" name="sun" />
    <PlIcon v-else name="moon" />
  </PlButton>
  <Components />
</template>
