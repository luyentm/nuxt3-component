<script setup>
let toggle = ref(false)
defineProps({
  items: Array
})
</script>

<template>
  <div @mouseleave="toggle = false">
    <button class=" bg-blue-600 px-5 py-2 shadow-md font-semibold text-white duration-75" :class="toggle ? 'scale-80' : 'translate-y-0'" @mousedown="toggle = true" @mouseup="toggle = false">
      <slot />
    </button>
  </div>
</template>
