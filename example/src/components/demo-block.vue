<template>
  <div class="demo-block">
    <h3>{{ title }}</h3>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DemoBlock',
  props: {
    title: {
      type: String,
      default: 'Block Title',
    },
  },
})
</script>

<style scoped>
.demo-block {
  margin-bottom: 40px;
}
</style>
