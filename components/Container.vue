<template>
  <div class="w-full h-full bg-blue-600 px-5 py-2 font-semibold text-white duration-75">
    {{ modelValue.class }}
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Object,
    default: {}
  }
})


</script>