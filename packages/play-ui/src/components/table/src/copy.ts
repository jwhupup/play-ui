import { toRaw } from 'vue'
import { config } from '.'

let cellData = ''
let columnKey = ''
let rowData = {}
const columnData: string[] = []

export const copyRow = () => {
  Reflect.deleteProperty(rowData, 'children')
  copy(
    Object.values(rowData).filter((_, index) => index < config.value.columns.length).join(' '),
  )
}

export const copyColumn = () => {
  columnData.length = 0
  getColumnData(config.value.data)
  copy(columnData.join('\n'))

  function getColumnData(data: Record<string, any>[]) {
    data.forEach((row) => {
      columnData.push(row[columnKey])

      if (row.children)
        getColumnData(row.children)
    })
  }
}

export const copyCell = () => {
  copy(cellData)
}

export const handelCopy = (row: Record<string, any>, key: string, cell: any) => {
  rowData = toRaw(row)
  cellData = cell
  columnKey = key
}

function copy(source: string) {
  if (navigator && 'clipboard' in navigator) {
    navigator.clipboard.writeText(source)
  }
  else {
    const ta = document.createElement('textarea')
    ta.value = source ?? ''
    ta.style.position = 'absolute'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    ta.remove()
  }
}
