<template>
  <div class="w-full h-full flex ">
    <div class="h-full flex flex-col border-r border-black min-w-20">
      <div class="text-white p-3"> Property</div>
    </div>
    <div class="flex-1 overflow-y-scroll">
      <MyBase :items="item" :deep="0"></MyBase>
    </div>
  </div>
</template>
<script setup>
const item = ref([{ "name": "1", "items": [], "col": "grid-cols-1", type: 'menu' }])
</script>