<template>
  <div class="pl-table">
    <div class="pl-table-head">
      <div class="pl-table-row">
        <div class="pl-table-cell">
          <PlCheckbox v-model="isCheckedAll" type="checkbox" />
        </div>
        <div v-for="col in head" :key="col.key" class="pl-table-cell">
          {{ col.name }}
        </div>
      </div>
    </div>
    <div class="pl-table-body">
      <div v-for="(row, index) in data" :key="index" class="pl-table-row">
        <div class="pl-table-cell">
          <PlCheckbox v-model="row.isChecked" type="checkbox" />
        </div>
        <div v-for="col in head" :key="col.key" class="pl-table-cell">
          {{ row[col.key] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import PlCheckbox from '../../checkbox'
import { tableProps } from './table'

defineProps(tableProps)

const isCheckedAll = ref(false)

const checkboxData = ref([
  {
    isChecked: false,
    lable: 'Apple',
  },
  {
    isChecked: true,
    lable: 'Banana',
  },
])

watchEffect(() => {
  if (isCheckedAll.value)
    checkboxData.value.forEach(row => row.isChecked = true)
  else
    checkboxData.value.forEach(row => row.isChecked = false)
})
</script>
