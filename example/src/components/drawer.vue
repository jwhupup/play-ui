<template>
  <PlDrawer ref="darwer" :shake-off="[]">
    This is drawer default.
    <!-- <template #headless>
      <div style="width: 100%; height: 100vh; background: red;">
        This is drawer headless.
      </div>
    </template> -->
  </PlDrawer>
  <PlButton style="margin-left: 500px; margin-top: 500px;" @click="handleClick">
    open darwer
  </PlButton>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const darwer = ref()

const handleClick = () => {
  darwer.value?.open()
}
</script>
