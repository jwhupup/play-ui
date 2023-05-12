<template>
  <PlTables :header="tableHead" :data="tableData" column-resizable fixed-header />
  <PlCheckbox
    v-for="item in checkboxData" :key="item.lable" v-model="item.isChecked" :lable="item.lable"
    type="checkbox"
  />
  <PlButton @click="handleRemove">
    删除
  </PlButton>
  <PlInput type="default" size="mini" />

  <PlButton icon-right="bi-airplane" state="success" type="ghost" @click="handleRemove">
    删除
  </PlButton>
  <br>
  <PlBadge>11+</PlBadge>
  <br>

  <PlDropdown trigger="contextmenu" :data="menus">
    <PlButton icon-left="bi-airplane" icon-right="bi-airplane">
      dropdown1
    </PlButton>
  </PlDropdown>

  <!-- <PlInput type="underline" size="small" />
  <PlInput disabled type="light" size="medium" />
  <PlInput v-model="value" type="default" :rule="rule" native-type="email" size="large" placeholder="placeholder" @blur="handleBlur" /> -->
</template>

<script setup lang="ts">
import type { DropdownData } from 'play-ui'
import { ref } from 'vue'

// const rule = {
//   pattern: /^[GCDZTSPKXLY1-9]\d{1,4}$/,
//   require: true,
// }

// const value = ref(false)

// const handleBlur = () => console.log(12312)
const menus: DropdownData[] = [
  {
    name: 'home',
    // trigger: 'contextmenu',
    divider: true,
    title: 'title',
    disabled: true,
    menuButton: {
      iconRight: 'bi-airplane',
      badge: {
        value: 111,
      },
    },
    children: [
      {
        name: 'home-1',
        children: [
          {
            name: 'home-1-1',
            children: [
              { name: 'home-1-1' }, { name: 'home-1-2' }, { name: 'home-1-3' }, { name: 'home-1-4' },
            ],
          }, { name: 'home-1-2' }, { name: 'home-1-3' }, { name: 'home-1-4' },
        ],
      },
      {
        name: 'home-2',
        children: [
          { name: 'home-1-1' }, { name: 'home-1-2' }, { name: 'home-1-3' }, { name: 'home-1-4' },
        ],
      },
      {
        name: 'home-3',
      },
      {
        name: 'home-4',
      },
    ],
  },
  {
    name: 'message',
    callback() {
      alert('call back')
    },
    children: [
      { name: 'message-1' },
    ],
  },
  {
    name: 'cart',
    children: [
      { name: 'cart-1' }, { name: 'cart-2' }, { name: 'cart-3' }, { name: 'cart-4' },
    ],
  },
  {
    name: 'blog',
    children: [
      { name: 'blog-1' }, { name: 'blog-2' }, { name: 'blog-3' }, { name: 'blog-4' },
    ],
  },
]

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

  // head[0].group = 'aaa'
  // head[0].children = [{ name: 'aaa', key: 'key000', children: [{ name: 'c1-1', children: [{ name: 'b-1', key: 'b1' }, { name: 'b-2', key: 'b2' }], key: 'key1111', width: 120 }, { name: 'c1-2', key: 'key2222' }] }, { name: 'bbb', key: 'key111' }]

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

const handleRemove = () => {
  // console.log(tableData.value)
}
</script>
