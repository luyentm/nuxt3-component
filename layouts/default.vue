<template>
  <main class="bg-gray-700 flex flex-col h-screen">
    <div class="flex-1">
      <slot />
    </div>
    <div class="border-t border-black flex justify-center space-x-3 text-white text-xs py-3">
      <nuxt-link class="hover:text-yellow-100" to="/">home</nuxt-link>
      <nuxt-link class="hover:text-yellow-100" to="/builder">builder</nuxt-link>
      <nuxt-link class="hover:text-yellow-100" to="/components">components</nuxt-link>
    </div>
  </main>
</template>
