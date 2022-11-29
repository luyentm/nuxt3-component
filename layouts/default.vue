<template>
  <main class="bg-gray-700 flex flex-col h-screen">
    <div class="flex-1">
      <slot />
    </div>
    <div class="border-t border-black flex justify-center space-x-3">
      <div v-for=" i in 5" :key="i">{{ i }}</div>
    </div>
  </main>
</template>
