<template>
  <div class="h-full w-md  mr-10">
    <PlTabs placement="left">
      <PlTabPane name="tab 1" icon-left="airplane-engines-fill">
        <div>
          This is tab 1
          <BeakerIcon style="width: 1rem; height: 1rem" />
        </div>
      </PlTabPane>
      <PlTabPane name="disabled" disabled>
        disabled tab 2
      </PlTabPane>
      <PlTabPane name="tab 3">
        This is tab 3
      </PlTabPane>
      <PlTabPane v-for="item in panes" :key="item.name" :name="item.name">
        {{ item.content }}
      </PlTabPane>
    </PlTabs>
  </div>
  <div class="w-sm">
    <PlTabs placement="top">
      <PlTabPane name="tab 1" icon-left="airplane-engines-fill">
        This is tab 1.
      </PlTabPane>
      <PlTabPane name="tab 2">
        This is tab 2.
      </PlTabPane>
    </PlTabs>
  </div>
  <PlTabs placement="right">
    <PlTabPane name="tab 1" icon-left="airplane-engines-fill">
      This is tab 1.
    </PlTabPane>
    <PlTabPane name="tab 2">
      This is tab 2.
    </PlTabPane>
  </PlTabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const panes = ref([
  {
    name: 'tab 4',
    content: 'This is tab 4',
  },
])
</script>
