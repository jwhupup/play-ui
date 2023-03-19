<template>
  <Teleport to="body">
    <Mask v-if="mask && visible" />
    <OnClickOutside v-if="visible" @trigger="handleCancel">
      <div class="pl-modal">
        <Icon v-if="showClose" name="x-lg" @click="handleCancel" />
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
            <Button type="outline" @click="handleCancel">
              Cancel
            </Button>
            <Button type="solid" @click="handleConfirm">
              Confirm
            </Button>
          </div>
        </footer>
      </div>
    </OnClickOutside>
  </Teleport>
</template>

<script setup lang="ts">
import Button from '../../button/src/index.vue'
import Icon from '../../icon/src/index.vue'
import Mask from '../../mask/src/index.vue'
import OnClickOutside from '../../on-click-outside/src/index.vue'
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
