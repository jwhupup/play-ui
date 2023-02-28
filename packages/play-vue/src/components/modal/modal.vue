<template>
  <div
    v-show="modelValue"
    ref="overlayEl"
    class="pl-modal--overlay"
    @click.stop="handleClose"
  >
    <div class="pl-modal">
      <header>
        <h3>Modal title</h3>
      </header>
      <section>
        <span>
          This is a wider card with supporting text below as a natural lead-into
          additional content.
        </span>
      </section>
      <footer>
        <pl-button ref="closeEl" @click="handleClose">Close</pl-button>
        <pl-button type="solid">Sure</pl-button>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { modalProps } from './modal'

defineProps(modalProps)
const emits = defineEmits(['update:modelValue'])

const overlayEl = ref<HTMLDivElement>()
const closeEl = ref<HTMLDivElement>()

const handleClose = (evt: MouseEvent) => {
  console.log(closeEl.value)

  if (evt.target === overlayEl.value || evt.target === closeEl.value) {
    emits('update:modelValue', false)
  }
}
</script>
