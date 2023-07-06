<template>
  <div class=" w-full">
    <PlInput
      v-model="value"
      :pattern="/^\d+$/"
      error-tip="incorrect!🤲"
      success-tip="bingo!👏"
      info-tip="hello!😎"
      prefix-icon="browser-chrome"
      suffix-icon="bag-check-fill"
      placeholder="please enter content that matches '/^\d+$/'"
      clearable
      :step="2"
      :max="10"
      @input="handleInput"
    >
      <template #prepend>
        prepend
      </template>
      <template #append>
        append
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
