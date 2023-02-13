<template>
  <div class="pl-tag" :class="genClass($props)">
    <span :class="{ 'pl-tag--indicator': indicator }">
      <slot />
    </span>
    <i v-if="closable" class="pl-tag--close">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <path
          fill="currentColor"
          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </i>
  </div>
</template>

<script setup lang="ts">
import { createNamespace } from '../utils'
import { tagProps } from './options'

defineProps(tagProps)

const { genClass } = createNamespace('tag')
</script>
