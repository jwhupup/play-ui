<template>
  <div ref="dropdownEl" class="pl-dropdown" @mouseleave="handelLeave">
    <div class="pl-dropdown-button" @[trigger]="handleTrigger">
      <slot />
    </div>
    <div
      class="pl-dropdown-menu"
      :class="{ 'pl-dropdown-menu--open': isOpen }"
    >
      <template v-for="item in data" :key="item.name">
        <div
          v-if="!item.children"
          class="pl-dropdown-button"
        >
          <PlButton type="ghost" state="info" v-bind="item.menuButton">
            <div class="pl-dropdown-button-content">
              {{ item.name }}
              <PlBadge v-if="item.menuButton?.badge" v-bind="item.menuButton.badge" />
            </div>
          </PlButton>
          <div v-if="item.divider" class="pl-dropdown-divider" />
        </div>
        <template v-else>
          <PlDropdown
            v-if="item.children"
            :data="item.children"
            :trigger="item.trigger || trigger"
            class="pl-dropdown-children"
          >
            <PlButton type="ghost" state="info" v-bind="item.menuButton">
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
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import PlButton from '../../button'
import PlBadge from '../../badge'
import PlDropdown from './index.vue'
import { dropdownProps } from './dropdown'
import { useOutside } from './useOutside'

const props = defineProps(dropdownProps)

defineOptions({ name: 'Dropdown' })

const dropdownEl = ref<HTMLElement>()

const isOpen = ref(false)

const isOutside = useOutside(
  dropdownEl,
  Object.is(props.trigger, 'contextmenu')
    ? 'click'
    : props.trigger,
)

watch(isOutside, () => {
  if (isOutside.value)
    isOpen.value = false
})

const handelLeave = () => {
  if (Object.is(props.trigger, 'mouseenter'))
    isOpen.value = false
}

const handleTrigger = (evt: MouseEvent) => {
  evt.preventDefault()
  isOpen.value = !isOpen.value
}
</script>
