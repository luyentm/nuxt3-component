<template>
  <div class="flex w-full h-full">
    <div class="h-full border-r border-gray-300 flex flex-col p-2">
      <div>
        <button class=""> Button </button>
      </div>
    </div>
    <div class="flex-1 h-full flex flex-col bg-gray-100 p-5 space-y-3">
      <div class="w-full flex space-x-2">
        <Menu :items="items"> Phones </Menu>
        <Button> Click me </Button>
      </div>
      <div>
        <RickEditor />
      </div>
      <div>
        <Tabs />
      </div>
    </div>
  </div>

</template>

<script setup>
const items = ref([
  { name: 'Iphone' }, { name: 'Pixel' }, { name: 'Nokia' }
])
</script>