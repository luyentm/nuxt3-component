<template >
  <div class="h-full flex justify-between space-x-5">

    <div class="w-full h-full border-r bg-gray-100/50">

    </div>
    <div class="grid flex-shrink-0 relative overflow-hidden" :class="is_mobile ? 'w-421px' : 'w-1201px'">
      <BaseItem v-for="(item, index) in items" v-model="item.data" :key="index" />
    </div>

    <div class="w-full h-full border-l bg-gray-200 p-2">
      <div class="flex flex-col card">
        <div class="">rounded</div>
        <div class=" text-3 flex flex-wrap">
          <button @click="clickRounded(r)" v-for="r in rounded">{{ r }}</button>
        </div>
      </div>
    </div>

    <div class="w-full fixed bottom-8 left-0 flex justify-center space-x-2">
      <div @click="addItem" class="button">
        <div class="i-mdi:card-plus-outline"></div>
      </div>
      <div class="button">
        <div class="i-mdi:card-multiple-outline"></div>
      </div>

      <div @click="is_mobile = false" class="button" :class="!is_mobile ? '!bg-blue' : ''">
        <div class="i-mdi:desktop-mac"></div>
      </div>
      <div @click="is_mobile = true" class="button" :class="is_mobile ? '!bg-blue' : ''">
        <div class="i-mdi:cellphone-iphone"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
const rounded = ["rounded-none", "rounded", "rounded-md", "rounded-lg", "rounded-xl"]
const items = ref([])
const is_mobile = ref(false)
function addItem() {
  items.value.push({
    type: "container",
    data: {
      style: "",
      class: ""
    }
  })
}

function clickRounded(value) {
  console.log("🚀 ~ file: drag.vue:55 ~ clickRounded ~ value:", value)
}


</script>
<style lang="css">
.grid {
  margin: 0;
  padding: 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
  background-size: 10px 10px;
}

button {
  @apply px-1 m-1px bg-white border border-blue
}

.card {
  @apply bg-white shadow p-2
}
</style>
