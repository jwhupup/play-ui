<template>
  <div ref="dropdownEl" class="pl-dropdown" @mouseleave="handelLeave">
    <div class="pl-dropdown-button" :class="{ 'pl-dropdown-button--disabled': disabled }" @[trigger].prevent="handleTrigger" @click.stop="handleCustomPositionClick">
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
              <PlButton type="ghost" state="info" :disabled="item.disabled" v-bind="item.menuButton" @click="handleCallback(item)">
                <div class="pl-dropdown-button-content">
                  {{ item.name }}
                  <PlBadge v-if="item.menuButton?.badge" v-bind="item.menuButton.badge" />
                </div>
              </PlButton>
              <div v-if="item.divider" class="pl-dropdown-divider" />
            </div>
          </template>
          <template v-else>
            <PlDropdown :data="item.children" :trigger="item.trigger" :disabled="item.disabled" class="pl-dropdown-children">
              <div v-if="item.title" class="pl-dropdown-title">
                title
              </div>
              <PlButton type="ghost" state="info" icon-right="bi-chevron-right" :disabled="item.disabled" v-bind="item.menuButton" @click="handleCallback(item)">
                <div class="pl-dropdown-button-content">
                  {{ item.name }}
                  <PlBadge v-if="item.menuButton?.badge" v-bind="item.menuButton.badge" />
                </div>
              </PlButton>
              <div v-if="item.divider" class="pl-dropdown-divider" />
            </PlDropdown>
          </template>
        </template>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import PlButton from '../../button'
import PlBadge from '../../badge'
import PlDropdown from './index.vue'
import type { DropdownData } from './dropdown'
import { dropdownProps } from './dropdown'
import { useOutside } from './useOutside'

const props = defineProps(dropdownProps)
defineOptions({ name: 'Dropdown' })

const dropdownEl = ref<HTMLElement>()
const visible = ref(false)
const isOutside = useOutside(dropdownEl, [props.trigger, 'click'])
const position = ref({ x: 0, y: 0 })

const customPositionStyle = computed(() => {
  if (props.customPosition)
    return `position: fixed; top: ${position.value.y}px; left: ${position.value.x}px;`

  return ''
})

const handleCustomPositionClick = () => {
  if (props.customPosition)
    document.documentElement.click()
}

const handleTrigger = (evt: MouseEvent) => {
  visible.value = !visible.value

  if (props.customPosition) {
    position.value.x = evt.clientX
    position.value.y = evt.clientY
  }
}

const handelLeave = () => {
  if (Object.is(props.trigger, 'mouseenter'))
    visible.value = false
}

const handleCallback = (data: DropdownData) => {
  if (data.callback)
    data.callback()

  if (!data.children)
    document.documentElement.click()
}

watch(isOutside, () => {
  if (isOutside.value)
    visible.value = false
})
</script>
