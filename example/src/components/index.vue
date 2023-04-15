<template>
  <PlTable :head="tableHead" :data="tableData" />
  <PlCheckbox v-for="item in checkboxData" :key="item.lable" v-model="item.isChecked" :lable="item.lable" type="checkbox" />
  <PlInput type="default" size="mini" />
  <!-- <PlInput type="underline" size="small" />
  <PlInput disabled type="light" size="medium" />
  <PlInput v-model="value" type="default" :rule="rule" native-type="email" size="large" placeholder="placeholder" @blur="handleBlur" /> -->
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

// const rule = {
//   pattern: /^[GCDZTSPKXLY1-9]\d{1,4}$/,
//   require: true,
// }

// const value = ref('')

// const handleBlur = () => console.log(12312)

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
