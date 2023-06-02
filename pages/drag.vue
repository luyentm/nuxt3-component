<template >
  <div class="h-full grid">
    <button @click="addItem" class="fixed bottom-8 left-1/2 py-1 bg-blue-800 text-white px-8 rounded shadow-lg select-none -translate-x-1/2">+</button>
    <BaseItem v-for="item in items" />
  </div>
</template>
<script setup>
const items = ref([])
import { useResize } from '../useResize'

function addItem() {
  items.value.push({
    style: "top:100px;left:100px"
  })
}
</script>

<style lang="css">
.grid {
  margin: 0;
  padding: 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
  background-size: 10px 10px;
}
</style>
