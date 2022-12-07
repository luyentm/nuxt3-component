<template>
  <div class="w-full h-full p-5 w-full">
    <draggable
      :list="props.item.items"
      :group="{ name: 'g1' }"
      item-key="name">
      <template #item="{ element, index }">
        <div class=" rounded-md p-2 my-2 cursor-pointer border" :class="(deep % 2) ? 'bg-gray-100' : 'bg-gray-300'">
          <div class="flex justify-between">
            <div class="font-bold border px-2 cursor-pointer"> {{ element.name || element }}</div>
            <div class="flex space-x-1">
              <div class="font-bold border px-2 cursor-pointer" @click.self="addElement(element)">add</div>
              <div class="font-bold border px-2 cursor-pointer" @click.self="delElement(index)">del</div>
            </div>
          </div>
          <MyBase v-if="element.items.length" :item="element" :deep="(props.deep + 1)"></MyBase>
        </div>
      </template>
    </draggable>
  </div>
</template>
<script setup>
import draggable from 'vuedraggable'
const props = defineProps({
  item: {
    type: Object
  },
  deep: {
    type: Number
  }
})

function addElement(element) {
  element.items.push({
    name: "X",
    items: []
  },)
}
function delElement(index) {
  props.item.items.splice(index, 1);
}
</script>