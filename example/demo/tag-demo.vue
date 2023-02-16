<template>
  <!-- tag demo -->
  <h3>tag shape</h3>
  <PlTag shape="rounded">Tag 1</PlTag>
  <PlTag shape="pilled">Tag 1</PlTag>
  <br /><br /><br />

  <h3>tag type</h3>
  <PlTag type="solid">Tag 1</PlTag>
  <PlTag type="soft">Tag 1</PlTag>
  <PlTag type="outline">Tag 1</PlTag>
  <br /><br /><br />

  <h3>tag color</h3>
  <PlTag type="solid" color="blue">Tag 1</PlTag>
  <PlTag type="solid" color="teal">Tag 1</PlTag>
  <PlTag type="solid" color="red">Tag 1</PlTag>
  <PlTag type="solid" color="yellow">Tag 1</PlTag>
  <PlTag type="solid" color="gray">Tag 1</PlTag>
  <PlTag type="solid" color="deepGray">Tag 1</PlTag>
  <br /><br />
  <PlTag type="soft" color="blue">Tag 1</PlTag>
  <PlTag type="soft" color="teal">Tag 1</PlTag>
  <PlTag type="soft" color="red">Tag 1</PlTag>
  <PlTag type="soft" color="yellow">Tag 1</PlTag>
  <PlTag type="soft" color="gray">Tag 1</PlTag>
  <PlTag type="soft" color="deepGray">Tag 1</PlTag>
  <br /><br />
  <PlTag type="outline" color="blue">Tag 1</PlTag>
  <PlTag type="outline" color="teal">Tag 1</PlTag>
  <PlTag type="outline" color="red">Tag 1</PlTag>
  <PlTag type="outline" color="yellow">Tag 1</PlTag>
  <PlTag type="outline" color="gray">Tag 1</PlTag>
  <PlTag type="outline" color="deepGray">Tag 1</PlTag>
  <br /><br /><br />

  <h3>tag closable</h3>
  <PlTag type="solid" color="blue" closable>Tag 1</PlTag>
  <PlTag type="soft" color="teal" closable>Tag 1</PlTag>
  <PlTag type="outline" color="red" closable>Tag 1</PlTag>
  <br /><br /><br />

  <h3>tag indicator</h3>
  <PlTag type="solid" color="blue" indicator>Tag 1</PlTag>
  <PlTag type="soft" color="teal" indicator>Tag 1</PlTag>
  <PlTag type="outline" color="red" indicator>Tag 1</PlTag>
  <br /><br /><br />
</template>

<script lang="ts" setup>
import '@play/components/tag/tag.less'
import { PlTag } from '@play/components'
</script>
