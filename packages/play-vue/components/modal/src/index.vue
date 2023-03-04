<template>
  <Teleport to="body">
    <Mask v-if="mask && visible" />
    <PlOnClickOutside v-if="visible" @trigger="handleCancel">
      <div class="pl-modal">
        <pl-icon v-if="showClose" name="x-lg" @click="handleCancel" />

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
            <pl-button @click="handleCancel">
              Cancel
            </pl-button>
            <pl-button type="solid" @click="handleConfirm">
              Confirm
            </pl-button>
          </div>
        </footer>
      </div>
    </PlOnClickOutside>
  </Teleport>
</template>

<script setup lang="ts">
import Mask from '../../mask'
import { modalProps } from '../src/modal'

defineProps(modalProps)

const emits = defineEmits(['update:visible', 'cancel', 'confirm'])

const handleCancel = (evt: MouseEvent) => {
  emits('update:visible', false)
  emits('cancel', evt)
}

const handleConfirm = () => {
  emits('confirm')
}
</script>
