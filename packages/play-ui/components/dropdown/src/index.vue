<template>
  <div class="pl-dropdown" @mouseleave="handelMouseleave">
    <div ref="buttonEl" class="pl-dropdown-button" :class="{ 'pl-dropdown-button--disabled': disabled }" @[trigger].prevent="handleTrigger" @click.stop="handleCustomPositionClick">
      <slot />
    </div>
    <template v-if="data.length">
      <Transition name="fade">
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
import { nextTick, onMounted, ref, watchEffect } from 'vue'
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
  visible.value = true

  calcPosition(evt)

  nextTick(() => {
    if (menuEl.value) {
      if (menuEl.value.style.right) {
        menuEl.value.style.setProperty('right', '')
        menuEl.value.style.setProperty('left', '100%')
      }

      const { right, width, bottom, height } = menuEl.value.getBoundingClientRect() as DOMRect
      console.log(window.innerHeight, bottom, height, window.screenY)

      // if (!menuEl.value.closest('.pl-dropdown-children')) {
      // if (window.innerHeight - bottom <= 20) {
      //   console.log('小于20了！！！')
      //   menuEl.value.style.setProperty('top', '')
      //   menuEl.value.style.setProperty('bottom', '100%')
      // }
      // else if (window.innerHeight - bottom > height) {
      //   console.log('大于height了！！！')

      //   menuEl.value.style.setProperty('top', '100%')
      //   menuEl.value.style.setProperty('bottom', '-9px')
      // }
      // }

      // console.log(window.innerWidth, right, width)

      if (window.innerWidth - right <= 20) {
        menuEl.value.style.setProperty('left', '')

        if (menuEl.value.closest('.pl-dropdown-children'))
          menuEl.value.style.setProperty('right', `${width - 20}px`)
        else
          menuEl.value.style.setProperty('right', '20px')
      }
      else if (menuEl.value.closest('.pl-dropdown-children')) {
        menuEl.value.style.setProperty('left', '100%')
      }
    }
  })
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
