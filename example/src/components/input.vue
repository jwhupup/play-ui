<template>
  <div style="width: 400px;">
    <PlInput
      v-model="value"
      :pattern="/^\d+$/"
      error-tip="错了"
      success-tip="对了"
      prefix-icon="badge-cc"
      clearable
      type="number"
      :step="2"
      :max="10"
      @input="handleInput"
    >
      <!-- <template #prepend>
        231
      </template>
      <template #append>
        231
      </template> -->
    </PlInput>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const value = ref('')

watchEffect(() => {
  console.log(value.value)
})

const handleInput = () => {
  console.log('handleInput')
}
</script>
