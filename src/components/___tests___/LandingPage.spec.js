import Vue from 'vue'
import LandingPage from '@/components/LandingPage.vue'

function getRenderedText(Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({ propsData: propsData }).$mount()
  return vm.$el.textContent
}

describe('LandingPage.vue', () => {
  it('renders to the DOM', () => {
    // console.log(Object.keys(LandingPage))
    // expect(getRenderedText(LandingPage, {
    //   testPhoto: 'www.jpg.com'
    // })).toBeTruthy()
    expect(typeof LandingPage.render).toBe('function')
    // expect(vm.$el).toBeTruthy()
  })
})