<template>
  <main class="flex flex-col h-screen">
    <div class="flex-1 overflow-hidden">
      <slot />
    </div>
    <div class="border-t border-gray-300 flex justify-center space-x-3 text-xs py-1">
      <nuxt-link class="hover:text-blue-500" to="/">home</nuxt-link>
      <nuxt-link class="hover:text-blue-500" to="/drag">drop&drag</nuxt-link>
      <nuxt-link class="hover:text-blue-500" to="/builder">builder</nuxt-link>
      <nuxt-link class="hover:text-blue-500" to="/components">components</nuxt-link>
    </div>
  </main>
</template>


