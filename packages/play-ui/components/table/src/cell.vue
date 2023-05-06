<template>
  <div
    class="pl-table-cell"
    @dblclick="handleDbClick"
  >
    <slot>
      <PlInput v-if="editable" ref="editEl" v-model="value" size="mini" @blur="editable = false" />
      <span v-else :title="value">{{ value }}</span>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import PlInput from '../../input'

const props = defineProps<{
  modelValue?: string
}>()

const emit = defineEmits(['update:modelValue'])

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
</script>
