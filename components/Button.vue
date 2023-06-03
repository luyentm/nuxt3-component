<template>
  <div class="w-full h-full" @mouseleave="toggle = false">
    <button class="w-full h-full rounded-md bg-blue-600 px-5 py-2 shadow-md font-semibold text-white duration-75" :class="toggle ? 'scale-80' : 'translate-y-0'" @mousedown="toggle = true" @mouseup="toggle = false" @mouseleave="toggle = false">
      <slot>
        Button
      </slot>
    </button>
  </div>
</template>


<script setup>
let toggle = ref(false)
defineProps({
  items: {
    type: Array,
    default: [1, 2, 3]
  }
})

function DoMySelf() {
  console.log("Console.log from components")
}
defineExpose({
  DoMySelf
});
</script>

