<template>
  <Transition :leave-active-class="animation('fadeOut')">
    <div
      v-if="visible"
      ref="alertEl"
      class="pl-alert"
      :class="[`pl-alert--${mode}`, `pl-alert--${state}`]"
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
      <Button v-if="closable" mode="link" state="info" icon-left="x-lg" @click="handleClose" />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from '../../button/src/index.vue'
import Icon from '../../icon/src/index.vue'
import { animation } from '../../../utils'
import { alertProps } from '.'

defineProps(alertProps)
const emits = defineEmits(['close'])
defineOptions({ name: 'Alert' })

const visible = ref(true)
const alertEl = ref<HTMLDivElement>()

const handleClose = (evt: MouseEvent) => {
  visible.value = false
  emits('close', evt)
}
</script>
