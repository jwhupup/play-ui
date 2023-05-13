<template>
  <div class="pl-dropdown" @mouseleave="handelMouseleave">
    <div ref="dropdownButtonEl" class="pl-dropdown-button" :class="{ 'pl-dropdown-button--disabled': disabled }" @[trigger].prevent="handleTrigger" @click.stop="handleCustomPositionClick">
      <slot />
    </div>
    <template v-if="data.length">
      <div :style="customPositionStyle" class="pl-dropdown-menu" :class="{ 'pl-dropdown-menu--open': visible }">
        <template v-for="item in data" :key="item.name">
          <template v-if="!item.children">
            <div class="pl-dropdown-button">
              <div v-if="item.title" class="pl-dropdown-title">
                title
              </div>
              <Button type="ghost" state="info" :disabled="item.disabled" v-bind="item.menuButton" @click="handleCallback(item)">
                <div class="pl-dropdown-button-content">
                  {{ item.name }}
                  <Badge v-if="item.menuButton?.badge" v-bind="item.menuButton.badge" />
                </div>
              </Button>
              <div v-if="item.divider" class="pl-dropdown-divider" />
            </div>
          </template>
          <template v-else>
            <Dropdown :data="item.children" :trigger="item.trigger" :disabled="item.disabled" class="pl-dropdown-children">
              <div v-if="item.title" class="pl-dropdown-title">
                title
              </div>
              <Button type="ghost" state="info" icon-right="bi-chevron-right" :disabled="item.disabled" v-bind="item.menuButton" @click="handleCallback(item)">
                <div class="pl-dropdown-button-content">
                  {{ item.name }}
                  <Badge v-if="item.menuButton?.badge" v-bind="item.menuButton.badge" />
                </div>
              </Button>
              <div v-if="item.divider" class="pl-dropdown-divider" />
            </Dropdown>
          </template>
        </template>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue'
import type { DropdownData, DropdownProps } from '../../component'
import Button from '../../button/src/index.vue'
import Badge from '../../badge/src/index.vue'
import Dropdown from './index.vue'
import { withCustomPosition } from './custom-position'
import { useOutside } from './use-outside'

const props = withDefaults(defineProps<DropdownProps>(), {
  trigger: 'mouseenter',
})
defineOptions({ name: 'Dropdown' })

const dropdownButtonEl = ref<HTMLElement>()
const visible = ref(false)

const { customPositionStyle, calcPosition, handleCustomPositionClick } = withCustomPosition(props.customPosition)

const { listen, clean } = useOutside(dropdownButtonEl, [props.trigger, 'click'], (isOutside) => {
  if (isOutside.value)
    visible.value = false
})

onMounted(() => {
  watchEffect(() => {
    if (!visible.value)
      clean()
    else
      setTimeout(() => listen(), 0)
  })
})

const handleTrigger = (evt: MouseEvent) => {
  visible.value = !visible.value

  if (props.customPosition)
    calcPosition(evt)
}

const handelMouseleave = () => {
  if (Object.is(props.trigger, 'mouseenter'))
    visible.value = false
}

const handleCallback = (data: DropdownData) => {
  if (data.callback)
    data.callback()

  if (!data.children)
    document.documentElement.click()
}
</script>
