<template>
  <div style="width: 400px;">
    <PlSelect
      ref="select"
      v-model="value"
      :options="options"
      info-tip="哈喽！"
      clearable
      multiple
      prefix-icon="chevron-down"
      placeholder="this is select"
      :pattern="/^\d+$/"
      error-tip="错了"
      success-tip="对了"
    >
      <!-- <template #prepend>
        231
      </template>
      <template #append>
        231
      </template> -->
    </PlSelect>
  </div>
  <!-- <PlDropdown trigger="click" :data="[{ name: 1 }]">
    <template #reference>
      <PlButton>131</PlButton>
    </template>
  </PlDropdown> -->
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import 'play-ui/src/components/input/src/index.less'
import 'play-ui/src/components/tag/src/index.less'
import 'play-ui/src/components/dropdown/src/index.less'

const select = ref()
const value = ref([])

watchEffect(() => {
  console.log(value.value.length)
})

const options = ref([
  { name: 'btn 1' },
  { name: 'btn 2' },
  { name: 'btn 3' },
])
</script>
