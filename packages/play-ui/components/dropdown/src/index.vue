<template>
  <div class="pl-dropdown" @mouseleave="handelMouseleave">
    <div ref="buttonEl" class="pl-dropdown-button" :class="{ 'pl-dropdown-button--disabled': disabled }" @[trigger].prevent="handleTrigger" @click.stop="handleCustomPositionClick">
      <slot />
    </div>
    <template v-if="data.length">
      <Transition name="fade" @before-enter="onBeforeEnter">
        <div v-show="visible" ref="menuEl" :style="customPositionStyle" class="pl-dropdown-menu">
          <template v-for="item in data" :key="item.name">
            <template v-if="!item.children">
              <div v-if="item.title" class="pl-dropdown-title">
                title
              </div>
              <div class="pl-dropdown-button">
                <Button type="ghost" state="info" :disabled="item.disabled" v-bind="item.menuButton" @click="handleCallback(item)">
                  <div class="pl-dropdown-button-content">
                    {{ item.name }}
                    <Badge v-if="item.menuButton?.badge" v-bind="item.menuButton.badge" />
                  </div>
                </Button>
              </div>
              <div v-if="item.divider" class="pl-dropdown-divider" />
            </template>
            <template v-else>
              <div v-if="item.title" class="pl-dropdown-title">
                title
              </div>
              <Dropdown :data="item.children" :disabled="item.disabled" class="pl-dropdown-children">
                <Button type="ghost" state="info" icon-right="bi-chevron-right" :disabled="item.disabled" v-bind="item.menuButton" @click="handleCallback(item)">
                  <div class="pl-dropdown-button-content">
                    {{ item.name }}
                    <Badge v-if="item.menuButton?.badge" v-bind="item.menuButton.badge" />
                  </div>
                </Button>
              </Dropdown>
              <div v-if="item.divider" class="pl-dropdown-divider" />
            </template>
          </template>
        </div>
      </Transition>
    </template>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue'
import type { DropdownData, DropdownProps } from '../../component'
import Button from '../../button/src/index.vue'
import Badge from '../../badge/src/index.vue'
import { useOutside } from '../../composables/use-outside'
import Dropdown from './index.vue'
import { withCustomPosition } from './custom-position'

const props = withDefaults(defineProps<DropdownProps>(), {
  trigger: 'mouseenter',
})
defineOptions({ name: 'Dropdown' })

const buttonEl = ref<HTMLElement>()
const menuEl = ref<HTMLElement>()
const visible = ref(false)

const { customPositionStyle, calcPosition, handleCustomPositionClick } = withCustomPosition(props.customPosition)

const { listen, clean } = useOutside(buttonEl, [props.trigger, 'click'], (isOutside) => {
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
  if (visible.value)
    visible.value = false

  visible.value = !visible.value
  calcPosition(evt)

  // setTimeout(() => {
  //   if (menuEl.value) {
  //     if (window.innerWidth - evt.clientX <= menuEl.value.clientWidth) {
  //       menuEl.value.style.left = ''
  //       if (menuEl.value.closest('.pl-dropdown-children'))
  //         menuEl.value.style.setProperty('right', `${menuEl.value.clientWidth - 12}px`)
  //       else
  //         menuEl.value.style.setProperty('right', '12px')
  //     }
  //     else if (menuEl.value.closest('.pl-dropdown-children')) {
  //       menuEl.value.style.setProperty('left', '100%')
  //     }
  //   }
  // }, 0)
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
