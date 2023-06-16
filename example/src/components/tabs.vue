<template>
  <div style="position: absolute; width: 800px; height: 400px; top: 300px; left: 200px;">
    <PlTabs position="left">
      <PlTabPane name="tab 1" icon-left="airplane-engines-fill">
        <div>
          This is tab 1111.
          <BeakerIcon style="width: 1rem; height: 1rem" />
        </div>
      </PlTabPane>
      <PlTabPane name="tab 2" disabled>
        <PlTabs position="top">
          <PlTabPane name="tab 2-1">
            This is tab 2-1.
          </PlTabPane>
          <PlTabPane name="tab 2-2">
            This is tab 2-2.
          </PlTabPane>
        </PlTabs>
      </PlTabPane>
      <PlTabPane name="tab 3" style="background: green">
        This is tab 3-default.
      </PlTabPane>
      <PlTabPane v-for="item in panes" :key="item.name" :name="item.name">
        {{ item.content }}
      </PlTabPane>
    </PlTabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const panes = ref([
  {
    name: 'tab 4',
    content: '312321312312',
  },
])
</script>
