<template>
  <div
    ref="alertEl"
    class="pl-alert"
    :class="[`pl-alert--${type}`, `pl-alert--${state}`]"
  >
    <Icon v-if="icon" :name="icon" />
    <div>
      <slot name="title" />
      <span v-if="!$slots.title && title" class="pl-alert--title">
        {{ title }}
      </span>
      <slot />
      <div v-if="!$slots.default && description" class="pl-alert--description">
        {{ description }}
      </div>
    </div>
    <Icon v-if="closable" name="bi-x-lg" @click="handleClose" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Icon from '../../icon/src/index.vue'
import type { AlertProps } from '../../component'

withDefaults(defineProps<AlertProps>(), {
  type: 'solid',
  state: 'info',
})

const emits = defineEmits(['close'])

defineOptions({ name: 'Alert' })

const alertEl = ref<HTMLDivElement>()

const handleClose = (evt: MouseEvent) => {
  alertEl.value?.parentElement?.removeChild(alertEl.value)
  emits('close', evt)
}
</script>
