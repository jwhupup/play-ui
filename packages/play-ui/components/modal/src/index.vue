<template>
  <Teleport to="body">
    <Mask v-if="mask && visible" />
    <div v-show="visible" ref="modalEl" class="pl-modal">
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
        <div class="pl-modal-button">
          <Button type="outline" @click="handleCancel">
            Cancel
          </Button>
          <Button type="solid" @click="handleConfirm">
            Confirm
          </Button>
        </div>
      </footer>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue'
import Button from '../../button/src/index.vue'
import Icon from '../../icon/src/index.vue'
import Mask from '../../mask/src/index.vue'
import { useOutside } from '../../dropdown/src/use-outside'
import type { ModalProps } from '../../component'

const props = withDefaults(defineProps<ModalProps>(), {
  mask: true,
  showClose: true,
})
const emits = defineEmits(['update:visible', 'cancel', 'confirm'])

defineOptions({ name: 'Modal' })

const modalEl = ref<HTMLElement>()

const { listen, clean, isOutside } = useOutside(modalEl, ['click', 'contextmenu'], () => {
  if (isOutside.value)
    emits('update:visible', false)
})

onMounted(() => {
  watchEffect(() => {
    if (!props.visible)
      clean()
    else
      setTimeout(() => listen(), 0)
  })
})

const handleCancel = (evt: MouseEvent) => {
  emits('update:visible', false)
  emits('cancel', evt)
}

const handleConfirm = () => {
  emits('confirm')
}
</script>
