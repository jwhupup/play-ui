<template>
  <div class="flex flex-col gap-10">
    <div class=" w-full">
      <PlSelect
        v-model="value"
        :options="options"
        info-tip="hello!😎"
        prefix-icon="browser-chrome"
        suffix-icon="bag-check-fill"
        placeholder="select one something."
        clearable
      >
        <template #prepend>
          prepend
        </template>
        <template #append>
          append
        </template>
      </PlSelect>
    </div>
    <div class=" w-full">
      <PlSelect
        v-model="value"
        :options="options"
        info-tip="hello!😎"
        prefix-icon="browser-chrome"
        suffix-icon="bag-check-fill"
        placeholder="select multiple something."
        clearable
        multiple
      >
        <template #prepend>
          prepend
        </template>
        <template #append>
          append
        </template>
      </PlSelect>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')

const options = ref<any[]>([])
for (let i = 0; i < 6; i++)
  options.value.push({ name: `option-${i}` })
</script>
