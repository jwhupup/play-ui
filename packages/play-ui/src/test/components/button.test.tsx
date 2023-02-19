import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Button from '../../components/button/button.vue'

describe('Button.vue', () => {
  it('create', () => {
    const wrapper = mount(() => <Button type="solid">Button</Button>)
    expect(wrapper.classes()).toContain('pl-button--solid')
  })
})
