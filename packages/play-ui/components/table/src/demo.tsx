import { defineComponent } from 'vue'
import PlIcon from '../../icon'
import { tableProps } from './table'

export default defineComponent({
  props: tableProps,
  setup(props, { slots }) {
    const renderColgroup = () => {
      return (
        <colgroup>
          <col style="background-color: pink" width="100" />
          <col style="background-color: greenyellow" width="100" />
          <col width="100" />
        </colgroup>
      )
    }

    const renderHeader = () => {
      return (
        <thead>
          <tr>
            {props.head.map((col, index) => (
              <th key={index}>{col.lable}</th>
            ))}
          </tr>
        </thead>
      )
    }

    const bodyContent: JSX.Element[] = []
    const renderTableRows = (data: any[]) => {
      data.forEach((row, rowIndex) => {
        bodyContent.push(
          <tr key={rowIndex} v-show={row}>
            {props.head.map((col, colIndex) => (
              <td key={colIndex}>
                <PlIcon
                  v-show={row.children && !colIndex}
                  name={'bi-chevron-right'}
                  onClick={() => {
                    row.__showChild = !row.__showChild
                  }}
                />
                {slots[col.prop]
                  ? slots[col.prop]!({ cell: row[col.prop], row, rowIndex })
                  : <span>{row[col.prop]}</span>}
              </td>
            ))}
          </tr>,
        )
        if (row.children && row.children.length)
          renderTableRows(row.children)
      })

      return bodyContent
    }

    const renderBody = () => {
      return <tbody>{renderTableRows(props.data)}</tbody>
    }

    return () => {
      return (
        <div class={'pl-table'}>
          <table>
            {renderColgroup()}
            {renderHeader()}
            {renderBody()}
          </table>
        </div>
      )
    }
  },
})
