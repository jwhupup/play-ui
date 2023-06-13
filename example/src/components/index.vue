<template>
  <PlModal ref="modal" :shake-off="['']" title="Title" draggable @cancel="handleCancel" @confirm="handleConfirm">
    This is modal
    <!-- <template #headless>
      <div>
        This is headless
        <button @click="modal?.close()">
          close
        </button>
      </div>
    </template> -->
  </PlModal>
  <button @click="handleClick">
    open modal
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ModalInstance } from 'play-ui'

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
