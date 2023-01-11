<template>
  <draggable
    :list="props.items"
    :group="{ name: 'g1' }"
    handle=".handle"
    tag="ul"
    item-key="id">
    <template #item="{ element, index }">
      <li class="rounded shadow bg-gray-200 border border border-gray-300" :class="element.col_span">
        <!-- header -->
        <div class="flex justify-between items-center border-b border-gray-300">
          <div class="flex">
            <div class="px2 rounded-md bg-blue-500 handle cursor-pointer">#</div>
          </div>
          <div class="flex space-x-1 px1">
            <select v-if="(element.items.length > 1)" v-model="element.col">
              <option v-for="col in list_col">{{ col }}</option>
            </select>
            <select v-model="element.col_span">
              <option v-for="col in col_spans">{{ col }}</option>
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
        <div v-else class="w-full flex justify-center p1" @mouseover.self="(show = true)" @mouseleave.self="(show = false)">
          <component @click="(e)=>clickme(e,element)" class="w-full" :is="getComponents(element.type)" :data="element.data" />
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
import Container from './Container.vue'
const list_col = [
  "grid-cols-1",
  "grid-cols-2",
  "grid-cols-3",
  "grid-cols-4",
  "grid-cols-5",
  "grid-cols-6",
  "grid-cols-7",
  "grid-cols-8",
  "grid-cols-9",
  "grid-cols-10",
  "grid-cols-11",
  "grid-cols-12",
]
const col_spans = [
  "col-span-1",
  "col-span-2",
  "col-span-3",
  "col-span-4",
  "col-span-5",
  "col-span-6",
  "col-span-7",
  "col-span-8",
  "col-span-9",
  "col-span-10",
  "col-span-11",
  "col-span-12",
]
const list_components = [
  'button', 'menu', 'image', 'container'
]
const props = defineProps({
  items: {
    type: Array
  },
  deep: {
    type: Number
  },
  data: String
})
function addElement(element) {
  element.items.push({
    name: element.items.length + '',
    items: [],
    id: element.items.length,
    type: "container",
    col: "grid-cols-1",
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
    case 'container':
      return Container
    default:
      return Container
  }

}
function clickme(e, element) {
  console.log(e.target)
}
</script>