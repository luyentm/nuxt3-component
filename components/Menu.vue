<script setup>
let toggle = ref(false)
defineProps({
  items: Array
})
</script>

<template>
  <div class="relative" @mouseleave="toggle = false">
    <button class=" bg-blue-600 px-5 py-2 shadow-md font-semibold text-white" :class="!toggle ? 'border-black' : 'border-blue-600 '" @mouseover="toggle = true">
      <slot />
    </button>
    <div v-if="toggle" class="absolute left-1/2 -translate-x-1/2 -translate-y-2">
      <div class="flex flex-col items-center">
        <div class="w-0 h-0 border-l-transparent border-t-transparent border-r-transparent border-b-white border-10 "></div>
        <div class="flex justify-center space-3 flex-col w-50 bg-white rounded-md overflow-hidden">
          <div v-for=" i in items" :key="i" class="px-2 py-1 hover:bg-gray-300 cursor-pointer duration-200">
            {{ i.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
