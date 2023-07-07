import type { ExtractPropTypes, InjectionKey, PropType, Ref } from 'vue'
import { computed, defineComponent, provide, ref } from 'vue'
import Header, { type TabHeader } from './header'

export type TabsProps = ExtractPropTypes<typeof tabsProps>
export type TabsPosition = 'top' | 'left' | 'right'

export const PL_TAB_KEY = Symbol('pl-tabs') as InjectionKey<{
  paneId: Ref<number>
  placement: Ref<TabsPosition>
  headers: Ref<TabHeader[]>
  currentPaneId: Ref<number>
}>

const tabsProps = {
  defaultTab: String,
  placement: String as PropType<TabsPosition>,
}

export default defineComponent({
  name: 'Tabs',
  props: tabsProps,
  setup(props, { slots }) {
    const paneId = ref(0)
    const currentPaneId = ref(0)
    const headers = ref<TabHeader[]>([])

    if (!slots.default?.())
      console.log('Warn: Tabs missing default slot.')

    provide(PL_TAB_KEY, {
      headers,
      paneId,
      currentPaneId,
      placement: computed(() => props.placement || 'top'),
    })

    return () => (
      <div class={['pl-tabs', `${props.placement}`]}>
        <Header />
        {slots.default?.()}
      </div>
    )
  },
})
