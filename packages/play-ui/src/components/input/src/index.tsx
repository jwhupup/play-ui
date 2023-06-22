import { defineComponent, useAttrs } from 'vue'
import InputBase from './base.vue'
import { inputProps } from './input'

export default defineComponent({
  name: 'Input',
  props: inputProps,
  setup(props) {
    const attrs = useAttrs()
    const renderPesetNumber = () => (
        <InputBase
          {...props}
          {...attrs}
        >
        </InputBase>
    )

    const renderPresetLanguage = () => (
        <InputBase
          {...props}
          {...attrs}
        >
        </InputBase>
    )

    return () => (
      <>
        {props.preset === 'number' && renderPesetNumber()}
        {props.preset === 'language' && renderPresetLanguage()}
      </>
    )
  },
})
