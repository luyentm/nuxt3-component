<script setup>
defineProps({
  items: Array,
  data: {
    type: String,
    default: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/11/10/972631/Taylor-Swift-Enchant.jpg"
  }
})
</script>

<template>
  <img class="object-cover w-full h-full" :src="data" alt="">
</template>
