import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import { config } from '../i18n'
import ExtensionDemo from '../components/ExtensionDemo.vue'

describe('ExtensionDemo.vue', async () => {
  test('Remove ads on click', async () => {
    expect(ExtensionDemo).toBeTruthy()

    const i18n = createI18n(config)

    const wrapper = mount(ExtensionDemo, {
      global: {
        plugins: [i18n],
      },
    })

    expect(wrapper.find('.ad').exists()).toBeTruthy()

    await wrapper.get('button.search-btn:nth-child(1)').trigger('click')

    expect(wrapper.find('.ad').exists()).toBeFalsy()
  })
})
