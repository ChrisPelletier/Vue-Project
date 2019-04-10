import { mount, createLocalVue } from '@vue/test-utils'
import App from '../App.vue'

/* eslint-disable-next-line no-undef */
test('App has a .center-content class', () => {
  const vue = createLocalVue()

  const app = mount(App, { vue })

  /* eslint-disable-next-line no-undef */
  expect(app.classes()).toContain('center-content')
})
