import {
  type CSSProperties,
  type ExtractPropTypes,
  type VNode,
  computed,
  defineComponent,
  onMounted,
  onUpdated,
  ref,
} from 'vue'
import Scrollbar from '../../scrollbar'
import { range } from '../../../utils'

export type VirtualListProps = ExtractPropTypes<typeof virtualListProps>
export type HTMLElementWithEl = HTMLElement & { $el: HTMLElement }

const virtualListProps = {
  listHeight: Number,
  listItemCount: {
    type: Number,
    default: 0,
  },
  estimatedListItemHeight: {
    type: Number,
    required: true,
  },
}

export default defineComponent({
  name: 'VirtualList',
  props: virtualListProps,
  setup(props, { slots }) {
    const start = ref(0)
    const step = ref(0)
    const end = computed(() => start.value + step.value)
    const translate = ref(0)
    const listHeight = ref(props.estimatedListItemHeight! * props.listItemCount)
    const scrollbarEl = ref<HTMLElement>()
    const realAreaEl = ref<HTMLElement>()

    const itemInfos = computed(() =>
      range(1, props.listItemCount, 1).map((_, index) => ({
        index,
        height: props.estimatedListItemHeight,
        top: props.estimatedListItemHeight! * index,
        bottom: props.estimatedListItemHeight! * (index + 1),
      })),
    )

    const updateTranslate = () => {
      translate.value
        = start.value >= 1 ? itemInfos.value[start.value - 1].bottom : 0
    }

    const getStart = (scrollTop = 0) => {
      return itemInfos.value.find(item => item.bottom > scrollTop)?.index
    }

    const virtualAreaStyle = computed(() => ({
      height: `${listHeight.value}px`,
    }))

    const realAreaStyle = computed<CSSProperties>(() => ({
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      transform: `translateY(${translate.value}px)`,
    }))

    onMounted(() => {
      if (!scrollbarEl.value)
        return

      const height = props.listHeight
        ? props.listHeight
        : (scrollbarEl.value as HTMLElementWithEl).$el.offsetHeight

      step.value = Math.ceil(height / props.estimatedListItemHeight!)
    })

    onUpdated(() => {
      let index = start.value
      const items = [...realAreaEl.value!.children]
      items.forEach((item) => {
        const rect = item.getBoundingClientRect()
        const height = rect.height
        const diff = itemInfos.value[index].height! - height
        if (diff) {
          itemInfos.value[index].height = height
          itemInfos.value[index].bottom = itemInfos.value[index].bottom - diff
          for (let j = index + 1; j < itemInfos.value.length; j++) {
            itemInfos.value[j].top = itemInfos.value[j - 1].bottom
            itemInfos.value[j].bottom = itemInfos.value[j].bottom - diff
          }
        }
        if (index < itemInfos.value.length - 1)
          index++
      })
      listHeight.value = itemInfos.value[itemInfos.value.length - 1].bottom
      updateTranslate()
    })

    const onScroll = (evt: UIEvent) => {
      const scrollTop = (evt.target as HTMLElement).scrollTop
      start.value = getStart(scrollTop)!
    }

    const renderVirtualList = () => (
      <>
        <div style={virtualAreaStyle.value} />
        <div
          ref={realAreaEl}
          style={realAreaStyle.value}
        >
          {(slots.default?.()[0].children as VNode[])?.slice(
            start.value,
            end.value,
          )}
        </div>
      </>
    )

    return () => (
      <Scrollbar
        ref={scrollbarEl}
        height={props.listHeight}
        onScroll={onScroll}
      >
        {renderVirtualList()}
      </Scrollbar>
    )
  },
})
