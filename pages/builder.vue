<template>
  <div class="w-full h-full flex">
    <div class="h-full flex flex-col border-r border-black min-w-20">
      <div>MyBase</div>
    </div>
    <div class="flex-1 h-full p-3">
      <MyBase :item="item" :deep="0"></MyBase>
    </div>
  </div>
</template>
<script setup>
const item = ref(
  {
    name: "Phones",
    items: [
      {
        name: "Iphone",
        items: [
          {
            name: "IPhone 3",
            items: [
              {
                name: "X",
                items: []
              },
              {
                name: "XS",
                items: []
              }
            ]
          },
          {
            name: "IPhone 4",
            items: [
              {
                name: "X",
                items: []
              },
              {
                name: "XS",
                items: []
              }
            ]
          }, {
            name: "IPhone 5",
            items: [{
              name: "X",
              items: []
            },
            {
              name: "XS",
              items: []
            }
            ]
          }
        ]
      },
    ]
  },
)
</script>