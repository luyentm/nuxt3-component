<template >
  <div class="h-full grid">

    <BaseItem v-for="(item, index) in items" v-model="item.data" :key="index" />
    <div class="w-full fixed bottom-8 left-0 flex justify-center space-x-2">
      <button @click="addItem" class="button">
        <div class="i-mdi:card-plus-outline"></div>
      </button>
      <button class="button">
        <div class="i-mdi:card-multiple-outline"></div>
      </button>
    </div>
  </div>
</template>
<script setup>
const items = ref([])
function addItem() {
  items.value.push({
    type: "container",
    data: {
      style: "top:100px;left:100px",
      class:"rounded"
    }
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
