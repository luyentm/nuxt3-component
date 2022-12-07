<template>
  <draggable
    :list="props.items"
    :group="{ name: 'g1' }"
    handle=".handle"
    tag="ul"
    item-key="id">
    <template #item="{ element, index }">
      <li class="rounded shadow " :class="(deep % 2) ? 'bg-gray-100' : 'bg-gray-300'">
        <!-- header -->
        <div class="flex justify-between items-center bg-gray-600">
          <div class="flex">
            <div class="w-6 h-8 bg-blue-500 handle cursor-pointer"></div>
            <input type="text" v-model="element.name" class="px1 m1 w-30">
          </div>
          <div class="flex space-x-1 px1">
            <select v-if="(element.items.length > 1)" v-model="element.col">
              <option v-for="col in list_col">{{ col }}</option>
            </select>
            <select v-model="element.type">
              <option v-for="component_type in list_components">{{ component_type }}</option>
            </select>
            <div class="bg-white shadow hover:bg-gray-100 px-2 cursor-pointer" @click.self="addElement(element)">+</div>
            <div class="bg-white shadow  hover:bg-gray-100 px-2 cursor-pointer" @click.self="delElement(index)">-</div>
          </div>
        </div>
        <!-- content -->
        <MyBase class="p1 grid gap-1" :class="element.col" v-if="element.items.length" :items="element.items" :deep="(props.deep + 1)"></MyBase>
        <div v-else class="w-full flex justify-center p1">
          <component :is="getComponents(element.type)" :items="[{ name: 'Iphone' }, { name: 'Android' }]">Button</component>
        </div>
      </li>
    </template>
  </draggable>
</template>
<script setup>
import draggable from 'vuedraggable'
import Button from './Button.vue'
import Menu from './Menu.vue'
import Image from './Image.vue'
const list_col = [
  "grid-cols-1",
  "grid-cols-2",
  "grid-cols-3",
  "grid-cols-4",
  "grid-cols-5",
  "grid-cols-6",
  "grid-cols-7",
  "grid-cols-8",

]
const list_components = [
  'button', 'menu', 'image'
]
const props = defineProps({
  items: {
    type: Array
  },
  deep: {
    type: Number
  }
})

function addElement(element) {
  element.items.push({
    name: element.items.length + '',
    items: [],
    type: "menu",
    col: "grid-cols-2",
  },)
}
function delElement(index) {
  props.items.splice(index, 1);
}
function getComponents(type) {
  switch (type) {
    case 'button':
      return Button
    case 'menu':
      return Menu
    case 'image':
      return Image
  }

}
</script>