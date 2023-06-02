<template >
  <div ref="el" style="position: fixed" class="w-150px h-50px bg-blue-300 cursor-move relative p-1" :class="focus ? 'outline outline-blue-500 outline-1' : 'outline-none'" @mousedown="mouseDown" @mouseup="mouseUp" @mousemove="mouseMove">
    <div id="anchor00" v-if="focus" class="z-2 absolute top-0 left-0 w-3 h-3  border-l-2 border-t-2 border-blue-600 cursor-nwse-resize"></div>
    <div id="anchor11" v-if="focus" class="z-2 absolute top-0 right-0 w-3 h-3  border-r-2 border-t-2 border-blue-600 cursor-nesw-resize"></div>
    <div id="anchor22" v-if="focus" class="z-2 absolute bottom-0 left-0 w-3 h-3  border-l-2 border-b-2 border-blue-600 cursor-nesw-resize"></div>
    <div id="anchor33" v-if="focus" class="z-2 absolute bottom-0 right-0 w-3 h-3  border-r-2 border-b-2 border-blue-600 cursor-nwse-resize"></div>

    <div id="anchor0" v-if="focus" class="z-1 absolute top-0 right-0 w-full h-1 cursor-ns-resize bg-red"></div>
    <div id="anchor1" v-if="focus" class="z-1 absolute top-0 left-0 w-1 h-full cursor-ew-resize bg-red"></div>
    <div id="anchor2" v-if="focus" class="z-1 absolute top-0 right-0 w-1 h-full cursor-ew-resize bg-red"></div>
    <div id="anchor3" ref="rb" v-if="focus" class="z-1 absolute bottom-0 left-0 w-full h-1 cursor-ns-resize bg-red"></div>

    {{ resize }} <br />
    {{ drag }}
  </div>
</template>
<script setup>
import { onClickOutside } from '@vueuse/core'
import { useMouse } from '@vueuse/core'
const { x: x, y: y, sourceType } = useMouse({ touch: false })
const el = ref(null)
const focus = ref(false)
const resize = ref(0)
const drag = ref(0)
let delX = 0
let delY = 0
let target = ""
onClickOutside(el, (event) => {
  focus.value = false
  drag.value = 0
  resize.value = 0
})


function mouseDown(event) {
  target = event.target
  var bounding = target.getBoundingClientRect();
  delX = event.clientX - bounding.left;
  delY = event.clientY - bounding.top;
  focus.value = true

  if (target.id.startsWith("anchor")) {
    resize.value = 1
  } else {
    drag.value = 1
  }
}

watch(() => [x.value, y.value, drag.value], (newValue, oldValue) => {
  let _x = 10 * (parseInt((x.value - delX) / 10))
  let _y = 10 * (parseInt((y.value - delY) / 10))
  if (drag.value == 2) {
    el.value.style.left = `${_x}px`
    el.value.style.top = `${_y}px`
  }

  if (resize.value == 1) {
    // console.log((x.value - el.value.style.left))
    console.log("el", el.value.style)
    console.log("x.value", x.value)
    el.value.style.width = (x.value - el.value.getBoundingClientRect().left) + "px"
    el.value.style.height = (y.value - el.value.getBoundingClientRect().top) + "px"
  }
})

function mouseMove() {
  if (drag.value == 1) {
    drag.value = 2
  }
}

function mouseUp() {
  drag.value = 0
  resize.value = 0
  console.log("UP")
}
</script>


