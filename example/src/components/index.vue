<template>
  <PlTable :head="tableHead" :data="tableData" />
  <PlCheckbox
    v-for="item in checkboxData" :key="item.lable" v-model="item.isChecked" :lable="item.lable"
    type="checkbox"
  />
  <PlButton @click="handleRemove">
    删除
  </PlButton>
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

  data[0].children = [
    {
      key0: 'data0_data0',
      key1: 'data1_data1',
      key2: 'data2_data2',
      key3: 'data3_data3',
      key4: 'data4_data4',
      key5: 'data5_data5',
      key6: 'data6_data6',
      key7: 'data7_data7',
      key8: 'data8_data8',
      key9: 'data9_data9',
      children: [
        {
          key0: 'data0_data0_data0',
          key1: 'data1_data1_data1',
          key2: 'data2_data2_data2',
          key3: 'data3_data3_data3',
          key4: 'data4_data4_data4',
          key5: 'data5_data5_data5',
          key6: 'data6_data6_data6',
          key7: 'data7_data7_data7',
          key8: 'data8_data8_data8',
          key9: 'data9_data9_data9',
          children: [

          ],
        },
      ],
    },
  ]

  return {
    head,
    data,
  }
}

const { head, data } = mock()

// console.log(data)

const tableHead = reactive(head)
const tableData = ref(data)

const handleRemove = () => {
}
</script>
