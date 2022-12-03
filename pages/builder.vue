<template>
  <div class="w-full h-full flex">
    <div class="h-full flex flex-col border-r border-black min-w-20">
      <div>MyBase</div>
    </div>
    <div class="flex-1 h-full">
      sdf
      <MyBase :items="items"></MyBase>
      sdf
    </div>
  </div>
</template>
<script setup>
const items = ref([
  {
    name: "1",
    items: [
      "1", "2", "3"
    ]
  }, {
    name: "2",
    items: [
      "1", "2", "3"
    ]
  },
  {
    name: "3",
    items: [
      "1", "2", "3"
    ]
  }
])
</script>