import { shallowMount } from '@vue/test-utils'
import App from '@/components/App.vue'

describe('App.vue', () => {
  it('renders props.name when passed', () => {
    const name = 'App'
    const wrapper = shallowMount(App, {
      propsData: { name }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
