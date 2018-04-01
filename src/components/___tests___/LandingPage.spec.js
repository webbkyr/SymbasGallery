import Vue from 'vue'
import LandingPage from '@/components/LandingPage.vue'

function getRenderedText(Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({ propsData: propsData }).$mount()
  return vm.$el.textContent
}

describe('LandingPage.vue', () => {
  it('renders to the DOM', () => {
    expect(typeof LandingPage.render).toBe('function')
  })
})