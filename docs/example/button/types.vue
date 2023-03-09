<template>
  <div space-y-2>
    <div fscw gap-2>
      <pl-button type="solid" @click="changeTheme">
        solid
      </pl-button>
      <pl-button type="outline">
        outline
      </pl-button>
      <pl-button type="ghost">
        ghost
      </pl-button>
      <pl-button type="link">
        link
      </pl-button>
      <pl-button type="white">
        white
      </pl-button>
    </div>
  </div>
</template>

<script setup lang="ts">
const changeTheme = () => {
  console.log(document.querySelector('.VPSwitchAppearance'))

  const root = document.querySelector('html')
  if (root.getAttribute('data-theme') === 'dark') {
    root.className = ''
    return root.setAttribute('data-theme', 'light')
  }
  root.className = 'dark'
  return root.setAttribute('data-theme', 'dark')
}
</script>
