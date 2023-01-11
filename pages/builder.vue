<template>
  <div class="w-full h-full overflow-y-auto">
    <MyBase :items="item" :deep="0"></MyBase>
  </div>
</template>
<script setup>
const item = ref([{ "name": "0", "items": [], "id": 0, "type": "container", "col": "grid-cols-1" }])
</script>