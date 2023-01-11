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
  <div>
    <img class="object-contain" :src="data" alt="">
  </div>
</template>
