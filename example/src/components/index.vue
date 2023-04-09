<template>
  <PlTable :head="tableHead" :data="tableData" />
  <!-- <PlCheckbox v-for="item in checkboxData" :key="item.lable" v-model="item.isChecked" :lable="item.lable" type="checkbox" /> -->
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

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

const mock = (colCount = 10, rowCount = 20) => {
  const head = []
  const data = []
  for (let i = 0; i < colCount; i++)
    head.push({ name: `column${i}`, key: `key${i}` })

  for (let i = 0; i < rowCount; i++) {
    const obj: Record<string, unknown> = {}
    head.forEach((item, index) => {
      obj[item.key] = `data${index}`
    })
    data.push(obj)
  }

  return {
    head,
    data,
  }
}

const { head, data } = mock()

const tableHead = reactive(head)
const tableData = reactive(data)
</script>
