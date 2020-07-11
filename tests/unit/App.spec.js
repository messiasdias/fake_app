//import { shallowMount } from '@vue/test-utils'
import App from './../../src/App.vue'

describe('App.vue', () => {
  it('Expect App.name == "App" ', () => {
    expect(App.name).toMatch('App')
  })
})
