<template>
  <!-- button demo -->
  <h3>type</h3>
  <PlButton type="solid">Button</PlButton>
  <PlButton type="outline">Button</PlButton>
  <PlButton type="ghost">Button</PlButton>
  <PlButton type="soft">Button</PlButton>
  <PlButton type="white">Button</PlButton>
  <PlButton type="link">Button</PlButton>
  <br /><br /><br />

  <h3>size</h3>
  <PlButton size="small">Button</PlButton>
  <PlButton size="medium">Button</PlButton>
  <PlButton size="large">Button</PlButton>
  <br /><br /><br />

  <h3>shape</h3>
  <PlButton shape="rounded">Button</PlButton>
  <PlButton shape="pilled">Button</PlButton>
  <PlButton shape="circle" size="small">111</PlButton>
  <br /><br /><br />

  <h3>color</h3>
  <PlButton type="solid" color="blue">Button</PlButton>
  <PlButton type="solid" color="red">Button</PlButton>
  <PlButton type="solid" color="teal">Button</PlButton>
  <PlButton type="solid" color="yellow">Button</PlButton>
  <PlButton type="solid" color="gray">Button</PlButton>
  <PlButton type="solid" color="deepGray">Button</PlButton>
  <br /><br /><br />

  <h3>disabled</h3>
  <PlButton disabled type="solid" color="blue">Button</PlButton>
  <PlButton disabled type="solid" color="red">Button</PlButton>
  <PlButton disabled type="solid" color="teal">Button</PlButton>
  <PlButton disabled type="solid" color="yellow">Button</PlButton>
  <PlButton disabled type="solid" color="gray">Button</PlButton>
  <PlButton disabled type="solid" color="deepGray">Button</PlButton>
  <br /><br /><br />

  <h3>icon button</h3>
  <PlButton type="solid">
    <iconify-icon icon="mdi:home" />
    <span>Button</span>
  </PlButton>
  <br /><br /><br />

  <h3>button group</h3>
  <PlButtonGroup type="white" size="small" vertical>
    <PlButton>Button</PlButton>
    <PlButton>Button</PlButton>
    <PlButton>Button</PlButton>
  </PlButtonGroup>
  <br /><br /><br />
  <PlButtonGroup type="solid" color="teal" size="medium" disabled>
    <PlButton>Button</PlButton>
    <PlButton>Button</PlButton>
    <PlButton>Button</PlButton>
  </PlButtonGroup>
  <br /><br /><br />
  <PlButtonGroup type="solid" color="red" size="medium" shape="pilled">
    <PlButton>Button</PlButton>
    <PlButton>Button</PlButton>
    <PlButton>Button</PlButton>
  </PlButtonGroup>
  <br /><br /><br />
  <PlButtonGroup type="outline" size="large" color="yellow">
    <PlButton>
      <iconify-icon icon="mdi:home" />
      <span>Button</span>
    </PlButton>
    <PlButton>
      <iconify-icon icon="mdi:home" />
      <span>Button</span>
    </PlButton>
    <PlButton>
      <iconify-icon icon="mdi:home" />
      <span>Button</span>
    </PlButton>
  </PlButtonGroup>
  <br /><br /><br />
</template>

<script lang="ts" setup>
import '@play/components/button/button.less'
import '@play/components/button-group/button-group.less'
import { PlButton, PlButtonGroup } from '@play/components'
</script>
