<template>
  <div space-y-2 w-full>
    <PlTable :header="tableHead" :data="tableData" fixed-header striped border />
  </div>
</template>

<script setup lang="ts">
import 'play-ui/components/table/src/index.less'
import { PlTable } from 'play-ui/components'
import { ref } from 'vue'

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

const tableHead = ref(head)
const tableData = ref(data)
</script>
