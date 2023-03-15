import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Alert from '../src/index.vue'

describe('Alert.vue', () => {
  it('create', () => {
    const wrapper = mount(() => <Alert>Alert</Alert>)
    expect(wrapper.classes()).toContain('pl-alert')
  })
})
