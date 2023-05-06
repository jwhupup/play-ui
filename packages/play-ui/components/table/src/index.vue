<template>
  <div class="pl-table">
    <div class="pl-table-head">
      <div class="pl-table-row">
        <Cell v-if="selectable">
          <PlCheckbox v-model="isAllSelected" :indeterminate="indeterminate" @change="selected => switchAllSelected(data, selected)" />
        </Cell>
        <Cell v-for="col in head" :key="col.key" v-model="col.name" />
      </div>
    </div>
    <div class="pl-table-body">
      <Row :head="head" :data="tableData" :selectable="selectable" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import PlCheckbox from '../../checkbox'
import Row from './row.vue'
import Cell from './cell.vue'
import { tableProps, withMetadata } from './table'
import { indeterminate, isAllSelected, switchAllSelected, switchIndeterminate } from './selectable'

const props = defineProps(tableProps)

const tableData = computed(() => withMetadata(props.data))

watch(props.data, () => switchIndeterminate(props.data))
</script>
