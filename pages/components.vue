<template>
  <div class="flex w-full h-full">
    <div class="h-full border-r border-black flex flex-col p-2">
      <div>
        <button class="text-white"> Button </button>
      </div>
      <div>
        <button class="text-white"> Menu </button>
      </div>
    </div>
    <div class="flex-1 h-full flex flex-col justify-center items-center">
      <div class="flex space-x-2 my-2">
        <Menu :items="items"> Phones </Menu>
        <Button> Click me </Button>
      </div>
      <div>
        <RickEditor />
      </div>


    </div>
  </div>

</template>

<script setup>
const items = ref([
  { name: 'Iphone' }, { name: 'Pixel' }, { name: 'Nokia' }
])
</script>