<template>
  <div space-y-2 w-full>
    <pl-modal
      ref="modal"
      draggable
      @cancel="handleCancel"
      @confirm="handleConfirm"
    >
      <template #headless>
        <div class="bg-red p-3">
          This is custom modal.
          <button @click="modal?.close()">
            close
          </button>
        </div>
      </template>
    </pl-modal>
    <pl-button @click="handleClick">
      open custom modal
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
