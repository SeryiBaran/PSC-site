import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import { config } from '../i18n'
import App from '../App.vue'

describe('I18n', async () => {
  test('Set locale to "en"', async () => {
    expect(App).toBeTruthy()

    const i18nPlugin = createI18n(config)

    const wrapper = mount(App, {
      global: {
        plugins: [i18nPlugin],
      },
      mocks: {
        $t: () => {},
      },
    })

    await wrapper.find('select.locale-select').setValue('en')

    expect(wrapper.find('main p#about-whatIsIt').text()).toBe(config.messages.en.about.whatIsIt)
  })
})
