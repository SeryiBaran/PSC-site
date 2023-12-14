<script lang="ts" setup>
import { useLocalStorage } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import ExtensionDemo from './components/ExtensionDemo.vue'

const i18n = useI18n()

const localeStore = useLocalStorage('locale', i18n.locale)
</script>

<template>
  <div class="mx-auto flex max-w-5xl flex-col gap-4 p-4 text-center font-sans">
    <header class="my-16 flex flex-wrap items-center justify-center gap-4">
      <img src="@/assets/logo.png" alt="logo" class="h-20 w-20">
      <h1>
        Privacy Search Companion
      </h1>

      <select v-model="localeStore" class="locale-select text-gray-800">
        <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
          {{ locale }}
        </option>
      </select>
    </header>
    <main class="flex flex-col items-center gap-4">
      <section>
        <p id="about-whatIsIt">
          {{ $t("about.whatIsIt") }}
        </p>
        <p>
          {{ $t("about.aboutAdsInIt") }}
        </p>
        <p>
          {{ $t("about.allIsSimple") }}
        </p>
      </section>

      <section>
        <h2>
          {{ $t('demo.heading') }}
        </h2>
        <p>
          {{ $t('demo.description.whatThisExtensionDoing') }}
        </p>
        <p>
          {{ $t('demo.description.aboutConfidential') }}
        </p>
        <p>
          {{ $t('demo.description.howToUse') }}
        </p>

        <ExtensionDemo />
      </section>

      <h2>{{ $t('download.heading') }}</h2>

      <div class="flex flex-col gap-2">
        <a href="https://addons.mozilla.org/firefox/addon/privacy-companion/" target="_blank" class="btn btn-medium">
          <span class="icon icon-[mdi--firefox]" />{{ $t('download.firefox') }}
        </a>
        <a href="https://github.com/SeryiBaran/Privacy-Search-Companion" target="_blank" class="btn btn-medium">
          <span class="icon icon-[mdi--github]" />{{ $t('download.source') }}
        </a>
      </div>
    </main>

    <footer>
      <p>f5ociety x SeryiBaran: <strong>fuckfucksociety@protonmail.com</strong></p>

      <p>{{ $t('footer.developer') }}: <a href="https://seryibaran.github.io" target="_blank">@SeryiBaran</a></p>

      <p>© 2022</p>
    </footer>
  </div>
</template>
