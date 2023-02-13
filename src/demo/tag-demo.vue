<template>
  <!-- tag demo -->
  <h3>tag shape</h3>
  <PlTag shape="rounded">pl-tag</PlTag>
  <PlTag shape="pilled">pl-tag</PlTag>
  <br /><br /><br />

  <h3>tag type</h3>
  <PlTag type="solid">pl-tag</PlTag>
  <PlTag type="soft">pl-tag</PlTag>
  <PlTag type="outline">pl-tag</PlTag>
  <br /><br /><br />

  <h3>tag color</h3>
  <PlTag type="solid" color="blue">pl-tag</PlTag>
  <PlTag type="solid" color="teal">pl-tag</PlTag>
  <PlTag type="solid" color="red">pl-tag</PlTag>
  <PlTag type="solid" color="yellow">pl-tag</PlTag>
  <PlTag type="solid" color="gray">pl-tag</PlTag>
  <PlTag type="solid" color="deepGray">pl-tag</PlTag>
  <br /><br />
  <PlTag type="soft" color="blue">pl-tag</PlTag>
  <PlTag type="soft" color="teal">pl-tag</PlTag>
  <PlTag type="soft" color="red">pl-tag</PlTag>
  <PlTag type="soft" color="yellow">pl-tag</PlTag>
  <PlTag type="soft" color="gray">pl-tag</PlTag>
  <PlTag type="soft" color="deepGray">pl-tag</PlTag>
  <br /><br />
  <PlTag type="outline" color="blue">pl-tag</PlTag>
  <PlTag type="outline" color="teal">pl-tag</PlTag>
  <PlTag type="outline" color="red">pl-tag</PlTag>
  <PlTag type="outline" color="yellow">pl-tag</PlTag>
  <PlTag type="outline" color="gray">pl-tag</PlTag>
  <PlTag type="outline" color="deepGray">pl-tag</PlTag>
  <br /><br /><br />

  <h3>tag closable</h3>
  <PlTag type="solid" color="blue" closable>pl-tag</PlTag>
  <PlTag type="soft" color="teal" closable>pl-tag</PlTag>
  <PlTag type="outline" color="red" closable>pl-tag</PlTag>
  <br /><br /><br />

  <h3>tag indicator</h3>
  <PlTag type="solid" color="blue" indicator>pl-tag</PlTag>
  <PlTag type="soft" color="teal" indicator>pl-tag</PlTag>
  <PlTag type="outline" color="red" indicator>pl-tag</PlTag>
  <br /><br /><br />
</template>

<script lang="ts" setup>
import '@play/components/button/style'
import '@play/components/button-group/style'
import '@play/components/tag/style'
import { PlTag } from '@play/components'
</script>
