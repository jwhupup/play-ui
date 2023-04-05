<template>
  <div class="pl-table">
    <table>
      <colgroup>
        <col style="background-color: pink" width="100">
        <col style="background-color: greenyellow" width="100">
        <col width="100">
      </colgroup>
      <thead>
        <tr>
          <th v-for="(col, index) in head" :key="index">
            {{ col.lable }}
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(row, rowIndex) in data" :key="rowIndex">
          <tr @click="row.__showChild = !row.__showChild">
            <td v-for="(col, colIndex) in head" :key="colIndex">
              <slot :name="col.prop" :cell="row[col.prop]" :row="row" :row-index="rowIndex">
                <span>
                  {{ row[col.prop] }}
                </span>
              </slot>
            </td>
          </tr>
          <template v-if="row.children">
            <tr v-for="(childRow, childRowIndex) in row.children" v-show="row.__showChild" :key="childRowIndex">
              <td v-for="(col, colIndex) in head" :key="colIndex">
                <slot :name="col.prop" :cell="childRow[col.prop]" :row="childRow" :row-index="rowIndex">
                  <span>
                    {{ childRow[col.prop] }}
                  </span>
                </slot>
              </td>
            </tr>
          </template>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { tableProps } from './table'

defineProps(tableProps)
</script>
