<script setup lang="ts">
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
      <div class="bg-gray/10 border-b border-gray/20 flex flex-col md:flex-row items-center gap-4 p-2">
        <div class="text-red flex items-center gap-2 logo">
          <div class="text-10" :class="{ 'i-mdi-lock': isGoodSearch, 'i-mdi-lock-open-remove': !isGoodSearch }" />
          <p>
            {{ isGoodSearch ? `${$t('demo.searches.search')} ` + `№${goodSearchNumber}` : $t('demo.searches.badSearch') }}
          </p>
        </div>
        <input class="input w-full sm:max-w-md" type="text" :value="$t('demo.query')">
      </div>
      <div class="p-2 flex gap-4 flex-col sm:flex-row">
        <ul class="relative max-w-full sm:max-w-md flex flex-col gap-2 grow">
          <TransitionGroup name="resultsList">
            <li v-if="!isGoodSearch" class="rounded bg-red/20 p-2 grid grid-cols-[1.6rem_1fr] gap-y-2 w-full result">
              <div class="i-mdi-web text-4 self-center text-red" />
              <p class="m-0">
                {{ $t('demo.ads.resultAd.title') }}
              </p>
              <p class="text-3 col-start-2 m-0">
                {{ $t('demo.ads.resultAd.description') }}
              </p>
            </li>
            <li v-for="result in searchResults" :key="result.description" class="rounded bg-gray/30 p-2 grid grid-cols-[1.6rem_1fr] gap-y-2 w-full result">
              <div class="i-mdi-web text-4 self-center" />
              <p class="m-0">
                {{ result.title }}
              </p>
              <p class="text-3 col-start-2 m-0">
                {{ result.description }}
              </p>
            </li>
          </TransitionGroup>
        </ul>
        <div class="relative max-h-60 grow max-w-full sm:max-w-64">
          <TransitionGroup name="resultsList">
            <div v-if="!isGoodSearch" class="bg-red/20 p-2 w-full h-full rounded flex flex-col gap-y-2 result">
              <p class="m-0">
                {{ $t('demo.ads.bigAd.title') }}
              </p>
              <p class="m-0 text-3">
                {{ $t('demo.ads.bigAd.description') }}
              </p>
            </div>
          </TransitionGroup>
        </div>
      </div>
      <div
        class="absolute right-0 bottom-0 m-5 z-100 flex items-end font-sans gap-4 text-center"
      >
        <div
          v-if="buttonsShowed"
          class="text-gray-800 shadow max-w-80vw h-min flex flex-col gap-1"
        >
          <button v-for="searchNumber in [1, 2, 3]" :key="searchNumber" class="btn" @click="selectSearch(searchNumber)">
            {{ t('demo.searches.search') }} №{{ searchNumber }}
          </button>
        </div>
        <div
          class="flex w-10 h-10 rounded-full shadow cursor-pointer btn p-1"
          @click="buttonsShowed = !buttonsShowed"
        >
          <div v-if="!buttonsShowed" class="i-mdi-eye block m-auto text-lg" />
          <div v-else class="i-mdi-eye-off block m-auto text-lg" />
        </div>
      </div>
    </div>
  </BrowserMockup>
</template>

<style scoped>
.goodSearch .logo {
  @apply text-green-5;
}

.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 1rem;
}

.result {
  transition: all 0.2s ease;
}

.resultsList-enter-from,
.resultsList-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.resultsList-leave-active {
  position: absolute;
}
</style>
