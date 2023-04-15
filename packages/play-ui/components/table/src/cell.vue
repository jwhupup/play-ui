<template>
  <div
    tabindex="0"
    class="pl-table-cell"
    @blur="handleCellBlur"
    @dblclick="handleDbClick"
    @contextmenu.prevent="handleContextmenu"
  >
    <slot>
      <PlInput v-if="editable" ref="editEl" v-model="value" size="mini" @blur="handleInputBlur" />
      <span v-else :title="value">{{ value }}</span>
    </slot>
    <div v-if="isShowContextmenu" style="padding: 6px 12px; color: white; cursor: pointer; width: max-content; background-color: red; position: absolute; top: 50%; left: 50%; z-index: 100;">
      <div>复制</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import PlInput from '../../input'

const props = defineProps<{
  modelValue?: string
}>()

const emit = defineEmits(['update:modelValue'])

const isShowContextmenu = ref(false)
const editable = ref(false)
const editEl = ref<HTMLInputElement & { el: HTMLInputElement }>()
const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})

const handleDbClick = () => {
  editable.value = true
  nextTick(() => editEl.value?.el.focus())
}

const handleInputBlur = () => {
  editable.value = false
}

const handleCellBlur = () => {
  isShowContextmenu.value = false
}

const handleContextmenu = () => {
  isShowContextmenu.value = true
}
</script>
