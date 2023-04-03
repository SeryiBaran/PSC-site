<template>
  <div class="shadow-md rounded-lg overflow-hidden max-w-4xl flex flex-col min-h-[36rem]">
    <div class="bg-gray-500 h-8 flex px-2 items-center gap-2">
      <button class="mockup-btn bg-red-500" />
      <button class="mockup-btn bg-green-500" />
      <button class="mockup-btn bg-yellow-500" />
    </div>
    <div class="bg-white dark:bg-gray-700 grow overflow-auto relative">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.mockup-btn {
  @apply h-3 w-3 rounded-full;
}
</style>
