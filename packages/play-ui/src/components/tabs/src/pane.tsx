import type { ExtractPropTypes } from 'vue'
import { defineComponent, inject } from 'vue'
import { buttonProps } from '../../button'
import { PL_TAB_KEY } from '.'

export type TabPaneProps = Required<ExtractPropTypes<typeof tabPaneProps>>

const tabPaneProps = Object.assign({
  name: String,
}, buttonProps)

export default defineComponent({
  name: 'TabPane',
  props: tabPaneProps,
  setup(props, { slots }) {
    const { paneId, currentPaneId, headers } = inject(PL_TAB_KEY)!
    const id = paneId.value++
    headers.value.push({ id, ...props })

    return () => (
      <div v-show={currentPaneId.value === id}>{slots.default?.()}</div>
    )
  },
})
