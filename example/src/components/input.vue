<template>
  <div style="width: 400px;">
    <PlInput
      v-model="value"
      :pattern="/^\d+$/"
      error-tip="错了"
      success-tip="对了"
      suffix-icon="badge-cc"
      prefix-icon="badge-cc"
      clearable
      preset="number"
      @input="handleInput"
    >
      <template #prepend>
        231
      </template>
      <template #append>
        231
      </template>
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
