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
  <img class="object-cover w-full h-full selector" :src="data" alt="">
</template>

<style lang="css">
.selector {
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  pointer-events: none;
}
</style>