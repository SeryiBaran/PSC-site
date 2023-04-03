<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const showGoodSearchSecs = 60

const resultsQuantity = 3

const buttonsShowed = ref(true)
const isGoodSearch = ref(false)
const goodSearchNumber = ref<number>(1)

const searchResults = computed(() => Array.from({ length: resultsQuantity }, (_, i) => i + 1).map(number =>
  ({ title: `${t('demo.result.title')} ${number}`, description: `${t('demo.result.description')} ${number}` })))

function selectSearch(searchNumber: number) {
  isGoodSearch.value = true
  goodSearchNumber.value = searchNumber

  setTimeout(() => {
    isGoodSearch.value = false
  }, showGoodSearchSecs * 1000)
}
</script>

<template>
  <BrowserMockup class="m-auto w-full">
    <div class="h-full text-start" :class="{ goodSearch: isGoodSearch }">
      <div class="flex flex-col items-center gap-4 border-b border-gray-500/20 bg-gray-500/10 p-2 md:flex-row">
        <div class="logo flex items-center gap-2 text-red-500">
          <div class="text-5xl" :class="{ 'icon-[mdi--lock]': isGoodSearch, 'icon-[mdi--lock-open-remove]': !isGoodSearch }" />
          <p>
            {{ isGoodSearch ? `${$t('demo.searches.search')} ` + `№${goodSearchNumber}` : $t('demo.searches.badSearch') }}
          </p>
        </div>
        <input class="input w-full sm:max-w-md" type="text" :value="$t('demo.query')">
      </div>
      <div class="flex flex-col gap-4 p-2 sm:flex-row">
        <ul class="relative flex max-w-full grow flex-col gap-2 sm:max-w-md">
          <TransitionGroup name="resultsList">
            <li v-if="!isGoodSearch" class="result grid w-full grid-cols-[1.6rem_1fr] gap-y-2 rounded bg-red-500/20 p-2">
              <div class="icon-[mdi--web] text-red self-center" />
              <p class="m-0">
                {{ $t('demo.ads.resultAd.title') }}
              </p>
              <p class="col-start-2 m-0 text-sm">
                {{ $t('demo.ads.resultAd.description') }}
              </p>
            </li>
            <li v-for="result in searchResults" :key="result.description" class="result grid w-full grid-cols-[1.6rem_1fr] gap-y-2 rounded bg-gray-500/30 p-2">
              <div class="icon-[mdi--web] self-center" />
              <p class="m-0">
                {{ result.title }}
              </p>
              <p class="col-start-2 m-0 text-sm">
                {{ result.description }}
              </p>
            </li>
          </TransitionGroup>
        </ul>
        <div class="relative max-h-60 max-w-full grow sm:max-w-xs">
          <Transition name="resultsList">
            <div v-if="!isGoodSearch" class="result flex h-full w-full flex-col gap-y-2 rounded bg-red-500/20 p-2">
              <p class="m-0">
                {{ $t('demo.ads.bigAd.title') }}
              </p>
              <p class="m-0 text-sm">
                {{ $t('demo.ads.bigAd.description') }}
              </p>
            </div>
          </Transition>
        </div>
      </div>
      <div
        class="z-100 absolute bottom-0 right-0 m-5 flex items-end gap-4 text-center font-sans"
      >
        <div
          v-if="buttonsShowed"
          class="max-w-80vw flex h-min flex-col gap-1 text-gray-800 shadow"
        >
          <button v-for="searchNumber in [1, 2, 3]" :key="searchNumber" class="btn" @click="selectSearch(searchNumber)">
            {{ t('demo.searches.search') }} №{{ searchNumber }}
          </button>
        </div>
        <button
          class="btn icon-button "
          @click="buttonsShowed = !buttonsShowed"
        >
          <div v-if="!buttonsShowed" class="icon-[mdi--eye] m-auto block text-2xl" />
          <div v-else class="icon-[mdi--eye-off] m-auto block text-2xl" />
        </button>
      </div>
    </div>
  </BrowserMockup>
</template>

<style scoped>
.goodSearch .logo {
  @apply text-green-500;
}

.result {
  @apply transition-all duration-[0.4s] ease-out;
}

.resultsList-leave-to {
  @apply animate-fade-down animate-once animate-duration-[0.2s] animate-ease-out animate-reverse;
}

.resultsList-leave-active {
  @apply absolute;
}
</style>
