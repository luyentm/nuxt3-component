<script setup>
let icon_url = "/nuxt.png"
useHead({
  title: 'Luyen',
  link: [
    {
      rel: 'icon', type: 'image/png', href: icon_url,
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}

.router-link-exact-active {
  font-weight: 600;
}

.button {
  @apply bg-white text-blue-800 shadow rounded px-2 py-0.5 shadow-lg select-none duration-300 outline outline-1 hover:(bg-blue-800 text-white) cursor-pointer
}
</style>
