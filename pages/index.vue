<template>
  <div class="flex w-full h-full">
    <div class="w-1/4 h-full border-r border-black flex flex-col p-2">
      <div>
        <button class="text-white"> Button </button>
      </div>
      <div>
        <button class="text-white"> Menu </button>
      </div>
    </div>
    <div class="w-3/4 h-full flex justify-center items-center space-x-2">
      <Menu :items="items"> Phones </Menu>
      <Button> Click me </Button>
    </div>

  </div>
</template>

<script setup>
const items = ref([
  { name: 'Iphone' }, { name: 'Pixel' }, { name: 'Nokia' }
])
</script>