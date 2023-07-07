import { computed, defineComponent, inject, nextTick, onMounted, ref } from 'vue'
import type { ButtonProps } from '../../button'
import Button from '../../button'
import { PL_TAB_KEY } from '.'

export interface TabHeader extends ButtonProps {
  id: number
  name?: string
}

export default defineComponent({
  setup() {
    const { currentPaneId, headers, placement } = inject(PL_TAB_KEY)!
    const btnsWrpper = ref<HTMLElement>()
    const btns = ref<HTMLElement[]>()

    const thumbStyle = computed(() => {
      if (!btns.value)
        return

      if (placement.value === 'top') {
        const width = `${btns.value[currentPaneId.value].clientWidth}px`
        const transform = `translateX(${btns.value[currentPaneId.value].offsetLeft}px)`
        return {
          width,
          transform,
        }
      }
      const height = `${btns.value[currentPaneId.value].clientHeight}px`
      const transform = `translateY(${btns.value[currentPaneId.value].offsetTop}px)`

      return {
        height,
        transform,
      }
    })

    onMounted(() => {
      nextTick(() => {
        btns.value = Array.from(btnsWrpper.value!.children) as HTMLElement[]
      })
    })

    const onClick = (id: number) => {
      return () => currentPaneId.value = id
    }

    const renderHeaderButton = (hd: TabHeader) => (
      <Button
        {...hd}
        mode='link'
        state={currentPaneId.value === hd.id ? 'primary' : 'info'}
        onClick={onClick(hd.id)}
      >
        {hd.name}
      </Button>
    )

    return () => (
      <div class={['pl-tabs-header', placement.value]}>
        <div
          ref={btnsWrpper}
          class={['pl-tabs-button', placement.value]}
        >
          {headers.value.map(hd => renderHeaderButton(hd))}
        </div>
        <div class={['pl-tabs-slideway', placement.value]}>
          <div class='pl-tabs-thumb' style={thumbStyle.value}/>
        </div>
      </div>
    )
  },
})
