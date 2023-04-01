<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const i18n = useI18n()

const localeStore = useLocalStorage('locale', i18n.locale)
</script>

<template>
  <div font-sans max-w-5xl mx-auto p-4 text-center flex flex-col gap-4>
    <header flex items-center justify-center flex-wrap gap-4 my-16>
      <img src="@/assets/logo.png" alt="logo" h-20 w-20>
      <h1>
        Privacy Search Companion
      </h1>

      <select v-model="localeStore" class="text-gray-800">
        <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
          {{ locale }}
        </option>
      </select>
    </header>
    <main class="flex flex-col gap-4 items-center">
      <section>
        <p>
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
        <a href="#!" class="btn btn-medium">
          <span class="i-mdi-firefox" />{{ $t('download.firefox') }}
        </a>
        <a href="#!" class="btn btn-medium">
          <span class="i-mdi-github" />{{ $t('download.source') }}
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
