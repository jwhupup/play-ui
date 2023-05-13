import { computed, ref } from 'vue'

const position = ref({ x: 0, y: 0 })

export function withCustomPosition(customPosition: boolean) {
  const customPositionStyle = computed(() => {
    if (customPosition)
      return `position: fixed; top: ${position.value.y}px; left: ${position.value.x}px;`

    return ''
  })

  const handleCustomPositionClick = () => {
    if (customPosition)
      document.documentElement.click()
  }

  const calcPosition = (evt: MouseEvent) => {
    position.value.x = evt.clientX
    position.value.y = evt.clientY
  }

  return {
    calcPosition,
    customPositionStyle,
    handleCustomPositionClick,
  }
}
