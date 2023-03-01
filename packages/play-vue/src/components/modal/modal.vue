<template>
  <div v-show="visible" ref="overlayEl" class="pl-modal--overlay">
    <pl-on-click-outside @trigger="handleCancel">
      <div ref="modalEl" class="pl-modal">
        <header>
          <slot name="header" />
          <h3 v-if="!$slots.header">{{ title }}</h3>
          <pl-icon name="x-lg" @click="handleCancel" />
        </header>
        <section>
          <slot />
        </section>
        <footer>
          <slot name="footer" />
          <div v-if="!$slots.footer">
            <pl-button ref="cancelEl" @click="handleCancel">Cancel</pl-button>
            <pl-button type="solid" @click="handleConfirm">Confirm</pl-button>
          </div>
        </footer>
      </div>
    </pl-on-click-outside>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { modalProps } from './modal'

defineProps(modalProps)
const emits = defineEmits(['update:visible', 'cancel', 'confirm'])

const modalEl = ref<HTMLDivElement>()
const overlayEl = ref<HTMLDivElement>()
const cancelEl = ref<HTMLButtonElement>()

const handleCancel = (evt: MouseEvent) => {
  emits('update:visible', false)
  emits('cancel', evt)
}

const handleConfirm = () => {
  emits('confirm')
}
</script>
