<template>
  <VPFlyout
    v-if="theme.customLocaleLinks"
    class="translation"
    :icon="VPIconLanguages"
  >
    <div
      v-for="item in theme.customLocaleLinks"
      :key="item"
      class="link"
      :class="{ active: isActive(page.relativePath, item.link) }"
      @click="handleLinkClick(item.link)"
    >
      {{ item.text }}
    </div>
  </VPFlyout>
</template>

<script setup lang="ts">
import VPFlyout from 'vitepress/dist/client/theme-default/components/VPFlyout.vue'
import VPIconLanguages from 'vitepress/dist/client/theme-default/components/icons/VPIconLanguages.vue'
import { isActive } from 'vitepress/dist/client/theme-default/support/utils'
import { useData, useRoute, useRouter } from 'vitepress'
import { watchEffect } from 'vue'

const { theme, page } = useData()
const route = useRoute()
const router = useRouter()

// console.log(route)
// console.log(router)

const LANG_KEY = 'prefers-play-lang'

const prefersLang = localStorage.getItem('prefers-play-lang')

watchEffect(() => {
  if (route.path)
    console.log(route.path)
    // if (prefersLang)
    //   router.go(`/locales/${prefersLang}${route.path}`)
})

const handleLinkClick = (link) => {
  localStorage.setItem(LANG_KEY, link)
}
</script>

<style scoped>
.translation {
    display: flex;
    align-items: center;
    cursor: pointer;
}
.translation::before {
    display: inline-block;
    margin-right: 8px;
    margin-left: 16px;
    width: 1px;
    height: 24px;
    background-color: var(--vp-c-divider-light);
    content: "";
}

.link {
  display: block;
  border-radius: 6px;
  padding: 0 12px;
  line-height: 32px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  white-space: nowrap;
  transition: background-color 0.25s, color 0.25s;
}

.link:hover {
  color: var(--vp-c-brand);
  background-color: var(--vp-c-bg-mute);
}

.dark .link:hover {
  background-color: var(--vp-c-bg-soft);
}

.link.active {
  color: var(--vp-c-brand);
}
</style>
