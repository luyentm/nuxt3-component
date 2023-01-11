<template>
  <Button ref="child" @click="doClick" :items="[6,7,8]"> Child </Button>
</template>
<script setup>
const child = ref(null)
function doClick(e) {
  child.value.DoMySelf()
}
</script>