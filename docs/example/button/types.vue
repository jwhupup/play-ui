<template>
  <div space-y-2>
    <div fscw gap-2>
      <pl-button type="solid" state="info" @click="changeTheme">
        solid
      </pl-button>
      <pl-button type="outline" state="success">
        outline
      </pl-button>
      <pl-button type="ghost" state="success">
        ghost
      </pl-button>
      <pl-button type="link" state="success">
        link
      </pl-button>
      <pl-button type="white" state="success">
        white
      </pl-button>
    </div>
  </div>
</template>

<script setup lang="ts">
const changeTheme = () => {
  const root = document.querySelector('html')
  if (root.getAttribute('data-theme') === 'dark') {
    root.className = ''
    return root.setAttribute('data-theme', 'light')
  }
  root.className = 'dark'
  return root.setAttribute('data-theme', 'dark')
}
</script>
