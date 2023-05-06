import { computed, onMounted } from 'vue'
import type { PlTableColumnConfig } from './tables'

export const useResizeColumnWidth = (config: PlTableColumnConfig) => {
  let mouseStart = 0
  let mouseEnd = 0
  let originWidth = 0
  let cssVar = ''

  const genCssVar = (key: string) => `--pl-table-column-${key}-width`

  const calcColumnWidth = (e: MouseEvent) => {
    mouseEnd = e.clientX
    const mousemoveRange = mouseStart - mouseEnd
    document.documentElement.style.setProperty(cssVar, `${originWidth - mousemoveRange}px`)
  }

  const clean = () => {
    document.removeEventListener('mousemove', calcColumnWidth)
    document.removeEventListener('mouseup', calcColumnWidth)
  }

  const setColumnWidthCssVar = () => onMounted(() => {
    if (config.key)
      document.documentElement.style.setProperty(`${genCssVar(config.key)}`, `${config.width || 150}px`)
  },
  )

  const getColumnWidthCssVar = computed(() => {
    if (!config.children && config.key)
      return `width: var(${genCssVar(config.key)});`

    return ''
  })

  const handleResizeColumnWidth = (e: MouseEvent, key: string) => {
    cssVar = `${genCssVar(key)}`
    originWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue(cssVar))
    mouseStart = e.clientX
    document.addEventListener('mousemove', calcColumnWidth)
    document.addEventListener('mouseup', clean)
  }

  return {
    handleResizeColumnWidth,
    setColumnWidthCssVar,
    getColumnWidthCssVar,
  }
}
