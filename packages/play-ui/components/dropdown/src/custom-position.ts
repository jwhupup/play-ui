import { computed, ref } from 'vue'

const position = ref({ x: 0, y: 0 })

export function withCustomPosition(customPosition: boolean) {
  const customPositionStyle = computed(() => {
    const styleMap = new Map()
    let style = ''

    if (customPosition) {
      styleMap.set('position', 'fixed')
      styleMap.set('top', `${position.value.y}px`)
      styleMap.set('left', `${position.value.x}px`)
    }

    styleMap.forEach((value, key) => {
      style += `${key}:${value};`
    })

    return style
  })

  const handleCustomPositionClick = () => {
    if (customPosition)
      document.documentElement.click()
  }

  const calcPosition = (evt: MouseEvent) => {
    if (customPosition) {
      position.value.x = evt.clientX
      position.value.y = evt.clientY
    }
  }

  return {
    calcPosition,
    customPositionStyle,
    handleCustomPositionClick,
  }
}
