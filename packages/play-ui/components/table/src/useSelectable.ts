import { ref } from 'vue'

export const isAllSelected = ref(false)
export const indeterminate = ref(true)

export const switchIndeterminate = (data: any[]) => {
  for (const item of data) {
    if (item.__metadata__.selected)
      isAllSelected.value = true
    else
      indeterminate.value = true

    if (item.children)
      switchIndeterminate(item.children)
  }
}

export const switchAllSelected = (data: any[], state: boolean) => {
  indeterminate.value = false
  for (const item of data) {
    item.__metadata__.selected = state

    if (item.children)
      switchAllSelected(item.children, state)
  }
}
