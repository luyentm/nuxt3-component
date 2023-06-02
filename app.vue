<script setup>
let icon_url = "/nuxt.png"
icon_url = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
useHead({
  title: 'Nuxt3 Components',
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
</style>
