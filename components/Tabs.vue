<template>
  <div class="w-full flex flex-col">
    <div class="flex justify-center z-20">
      {{ value }}
      <div v-for="(item, index) in list" class="flex items-end" @click="change(item)" :key="item.name">
        <div class="box-l"></div>
        <div class="bg-[#FF0000] px-5 cursor-pointer rounded-t  z-20" :class="value.name == item.name ? 'font-bold' : ''">
          {{ item.name }}
          {{ index }}
        </div>
        <div class="box-r"></div>
      </div>
    </div>
    <div class="w-full bg-red-300">
      adsf
    </div>
  </div>
</template>


<script setup>
let value = $ref({})
const list = ref([
  { name: "Tab 1", description: "This is descriptions 1" },
  { name: "Tab 2", description: "This is descriptions 2" },
  { name: "Tab 3", description: "This is descriptions 3" },
  { name: "Tab 4", description: "This is descriptions 4" }
])

function change(item) {
  console.log("🚀 ~ file: Tabs.vue:31 ~ change ~ item", item)
  value = item
}
</script>

<style lang="css">
.box-l {
  overflow: hidden;
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 0em;
}

.box-l::before {
  position: absolute;
  margin: -10px;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0px 0px 0px 300px red;
  content: ''
}

.box-r {
  overflow: hidden;
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 0em;
}

.box-r::before {
  position: absolute;
  margin-left: 0px;
  margin-top: -10px;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0px 0px 0px 300px red;
  content: ''
}
</style>


