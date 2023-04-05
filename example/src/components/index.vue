<template>
  <PlTable :head="head" :data="data">
    <template #age="scope">
      <input v-model="scope.cell" type="text">
    </template>
    <template #action="scope">
      <pl-button type="link" size="mini" @click="handleAdd">
        add
      </pl-button>
      <pl-button type="link" size="mini" @click="handleDelete(scope.rowIndex)">
        delete
      </pl-button>
    </template>
  </PlTable>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const head = [
  { lable: 'ID', prop: 'id' },
  { lable: '姓名', prop: 'name' },
  { lable: '年龄', prop: 'age' },
  { lable: '操作', prop: 'action' },
]

const data = reactive([
  { id: 0, age: 18, name: '小黑子', children: [{ id: 11, age: 118, name: '小黑子11', children: [{ id: 111, age: 118, name: '小黑子111' }] }] },
  { id: 1, age: 18, name: '小鸡子', children: [{ id: 11, age: 118, name: '小鸡子11' }] },
  { id: 2, age: 18, name: '小牛子' },
])

const handleAdd = () => {
  data.push({ id: 0, age: 18, name: '小黑子' })
}

const handleDelete = (index: number) => {
  data.splice(index, 1)
}
</script>
