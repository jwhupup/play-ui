<template>
  <div class="pl-table">
    <div class="pl-table-head">
      <div class="pl-table-row">
        <Cell>
          <PlCheckbox type="checkbox" />
        </Cell>
        <Cell v-for="col in head" :key="col.key" v-model="col.name" />
      </div>
    </div>
    <div class="pl-table-body">
      <div v-for="(row, index) in data" :key="index" class="pl-table-row">
        <Cell>
          <PlCheckbox v-model="row.isChecked" type="checkbox" />
        </Cell>
        <Cell v-for="col in head" :key="col.key" v-model="row[col.key]" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PlCheckbox from '../../checkbox'
import { tableProps } from './table'
import Cell from './cell.vue'

defineProps(tableProps)
</script>
