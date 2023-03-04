<template>
  <div space-y-2 w-full>
    <pl-modal
      v-model:visible="visible"
      @cancel="handleCancel"
      @confirm="handleConfirm"
    >
      <span>
        This is a wider card with supporting text below as a natural lead-into
        additional content.
      </span>
    </pl-modal>
    <pl-button @click="visible = true">
      open modal
    </pl-button>
    <pl-badge value="100" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)

const handleCancel = () => {
  console.log('handleCancel')
}

const handleConfirm = () => {
  console.log('handleConfirm')
  visible.value = false
}
</script>
