<script setup>
let toggle = ref(false)
defineProps({
  items: {
    type: Array,
    default: [{ name: 'Iphone' }, { name: 'Android' }, { name: "Windowphone" }]
  }
})
</script>

<template>
  <div class="w-full relative" @mouseleave="toggle = false">
    <button class="w-full bg-red-600 px-5 py-2 shadow-md font-semibold text-white" :class="!toggle ? 'border-black' : 'border-blue-600 '" @mouseover="toggle = true">
      <slot>
        Menu
      </slot>
    </button>
    <div v-if="toggle" class="absolute left-1/2 -translate-x-1/2 -translate-y-2 z-50">
      <div class="flex flex-col items-center">
        <div class="w-0 h-0 border-l-transparent border-t-transparent border-r-transparent border-b-white border-10 "></div>
        <div class="flex justify-center space-3 flex-col w-50 bg-white rounded-md overflow-hidden shadow">
          <div v-for=" i in items" :key="i" class="px-2 py-1 hover:bg-gray-300 cursor-pointer duration-200">
            {{ i.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
