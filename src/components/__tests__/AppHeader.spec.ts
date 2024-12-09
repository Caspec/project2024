
import { mount } from '@vue/test-utils'
import { expect, describe, it } from 'vitest'
import AppHeader from '../AppHeader.vue'

describe('AppHeader', () => {
  it('renders properly', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.exists()).toBe(true)
  })
})
