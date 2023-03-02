<template>
  <Mask v-if="mask && visible" />
  <pl-on-click-outside v-if="visible" @trigger="handleCancel">
    <div ref="modalEl" class="pl-modal">
      <pl-icon v-show="showClose" name="x-lg" @click="handleCancel" />

      <slot name="header" />
      <header v-if="!$slots.header && title">
        <h3>{{ title }}</h3>
      </header>
      <section>
        <slot />
      </section>
      <slot name="footer" />
      <footer v-if="!$slots.footer">
        <div>
          <pl-button @click="handleCancel">Cancel</pl-button>
          <pl-button type="solid" @click="handleConfirm">Confirm</pl-button>
        </div>
      </footer>
    </div>
  </pl-on-click-outside>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Mask from '../mask'
import { modalProps } from './modal'

defineProps(modalProps)

const emits = defineEmits(['update:visible', 'cancel', 'confirm'])

const modalEl = ref<HTMLDivElement>()

const handleCancel = (evt: MouseEvent) => {
  emits('update:visible', false)
  emits('cancel', evt)
}

const handleConfirm = () => {
  emits('confirm')
}
</script>
