<template>
  <demo-block title="Type solid">
    <PlAlert color="teal" title="title" description="21312" />
    <PlAlert color="blue" description="21312" />
    <PlAlert color="red" description="21312" />
    <PlAlert color="yellow" description="21312" />
    <PlAlert color="gray" description="21312" />
    <PlAlert color="deepGray" description="21312" />
  </demo-block>
  <demo-block title="Type soft">
    <PlAlert
      type="soft"
      icon="exclamation-circle"
      color="red"
      title="Title"
      description="Alerts can also contain additional HTML elements like headings, paragraphs and icons."
    >
      <template #default>
        <div>Custom titleCustom titleCustom titleCustom title</div>
      </template>
    </PlAlert>
    <PlAlert type="soft" color="blue" description="21312" />
    <PlAlert type="soft" color="red" description="21312" />
    <PlAlert type="soft" color="yellow" description="21312" />
    <PlAlert type="soft" color="gray" description="21312" />
    <PlAlert type="soft" color="deepGray" description="21312" />
  </demo-block>
</template>

<script setup lang="ts"></script>
