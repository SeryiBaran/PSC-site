<template>
  <div class="flex min-h-[36rem] max-w-4xl flex-col overflow-hidden rounded-lg shadow-md">
    <div class="flex h-8 items-center gap-2 bg-gray-500 px-2">
      <button class="mockup-btn bg-red-500" />
      <button class="mockup-btn bg-green-500" />
      <button class="mockup-btn bg-yellow-500" />
    </div>
    <div class="relative grow overflow-auto bg-white dark:bg-gray-700">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.mockup-btn {
  @apply h-3 text-black rounded-full w-3 shadow;
}
</style>
