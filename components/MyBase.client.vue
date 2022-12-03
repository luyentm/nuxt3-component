<template>
  <div class="w-full h-full p-5">

    <draggable
      :list="props.items"
      :group="{ name: 'g1' }"
      item-key="name">
      <template #item="{ element }">
        <div class="w-full bg-white m-1 p-3">
          {{ element.name }}
          <MyBase :items="element.items"></MyBase>
        </div>
      </template>
    </draggable>
  </div>
</template>
<script setup>
import draggable from 'vuedraggable'
const props = defineProps({
  items: {
    type: Array
  }
})

</script>