import { ref, watch } from 'vue'

const isAllSelected = ref(false)
const indeterminate = ref(true)

export const useSelectable = (data: any) => {
  const switchIndeterminate = (data: any[]) => {
    for (const item of data) {
      if (item.__row_selected)
        isAllSelected.value = true
      else
        indeterminate.value = true

      if (item.children)
        switchIndeterminate(item.children)
    }
  }

  const switchAllSelected = (data: any[], state: boolean) => {
    indeterminate.value = false
    data.forEach((item) => {
      item.__row_selected = state
      if (item.children)
        switchAllSelected(item.children, state)
    })
  }

  const handleSelect = () => indeterminate.value = false

  const handleSelectAll = (selected: boolean) => switchAllSelected(data, selected)

  watch(data, () => switchIndeterminate(data))

  return {
    isAllSelected,
    indeterminate,
    handleSelect,
    handleSelectAll,
  }
}
