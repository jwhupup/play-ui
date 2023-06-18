import { type ExtractPropTypes, type PropType, defineComponent } from 'vue'
import { type Placement } from '@popperjs/core'
import Dropdown from '..'
import Button from '../../button'
import Badge from '../../badge'
import Popover from '../../popover'
import type { ButtonProps } from '../../button'
import type { BadgeProps } from '../../badge'

export type DropdownProps = ExtractPropTypes<typeof dropdownProps>

export interface DropdownData {
  name: string
  title?: string
  divider?: boolean
  disabled?: boolean
  button?: Partial<Pick<ButtonProps, 'state' | 'type' | 'iconLeft' | 'iconRight'> & { badge: BadgeProps }>
  callback?: () => void
  children?: DropdownData[]
}

const dropdownProps = {
  placement: {
    type: String as PropType<Placement>,
    default: 'bottom',
  },
  trigger: {
    type: String as PropType<'hover' | 'click'>,
    default: 'hover',
  },
  data: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
}

export default defineComponent({
  name: 'Dropdown',
  props: dropdownProps,
  setup(props, { slots }) {
    const onClick = (item: DropdownData) => {
      return (evt: MouseEvent) => {
        if (item.callback)
          item.callback()

        if (!item.children) {
          evt.stopPropagation()
          document.documentElement.click()
        }
      }
    }

    const renderMenuButton = (item: DropdownData) => (
      <Button
        type="ghost"
        state="info"
        disabled={item.disabled}
        onClick={onClick(item)}
        {...item.button}
      >
        <div class="pl-dropdown-button">
          {item.name}
          {item.button?.badge && <Badge {...item.button.badge} />}
        </div>
      </Button>
    )

    const renderNormalMenuButton = (item: DropdownData) => (
      <>
        {item.title && <div class="pl-dropdown-title">{item.title}</div>}
          {renderMenuButton(item)}
        {item.divider && <div class="pl-dropdown-divider" />}
      </>
    )

    const renderDropdown = () => (
      <div class="pl-dropdown-menu">
        {
          props.data.map((item) => {
            if (item.children) {
              return (
                <Dropdown
                  class="pl-dropdown-child"
                  data={item.children}
                  trigger={props.trigger}
                  placement="right"
                  v-slots={{
                    reference: renderMenuButton(item),
                  }}
                />
              )
            }
            return renderNormalMenuButton(item)
          })
        }
      </div>
    )

    return () => (
      <Popover
        v-slots={{
          reference: slots.reference,
          headless: slots.headless || renderDropdown,
        }}
        {...props}
      />
    )
  },
})
