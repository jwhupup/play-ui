<template>
  <div space-y-2 w-full>
    <pl-modal
      ref="modal"
      title="Title"
      cancel-button-text="No"
      confirm-button-text="Yes"
      draggable
      @cancel="handleCancel"
      @confirm="handleConfirm"
    >
      This is modal
    </pl-modal>
    <pl-button @click="handleClick">
      open modal
    </pl-button>
  </div>
</template>

<script setup lang="ts">
import type { ModalInstance } from 'play-ui'
import { ref } from 'vue'

const modal = ref<ModalInstance>()

const handleClick = () => {
  modal.value?.open()
}

const handleCancel = () => {
  console.log('modal canceled!')
}

const handleConfirm = () => {
  console.log('modal confirmed!')
  modal.value?.close()
}
</script>
