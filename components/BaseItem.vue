<template >
  <div ref="el" style="position: fixed" class="w-150px h-50px bg-blue-300 cursor-move relative p-1" :class="focus ? 'outline outline-blue-500 outline-1' : 'outline-none'" @mousedown="mouseDown" @mousemove="mouseMove">
    <div id="conner1" v-if="focus" class="z-2 absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white  border-2 rounded-full border-blue-600 cursor-nwse-resize"></div>
    <div id="conner2" v-if="focus" class="z-2 absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-3 h-3  bg-white  border-2 rounded-full  border-blue-600 cursor-nesw-resize"></div>
    <div id="conner3" v-if="focus" class="z-2 absolute bottom-0 left-0 w-3 h-3 -translate-x-1/2 translate-y-1/2 bg-white  border-2 rounded-full border-blue-600 cursor-nesw-resize"></div>
    <div id="conner4" v-if="focus" class="z-2 absolute bottom-0 right-0 w-3 h-3  translate-x-1/2 translate-y-1/2 bg-white  border-2 rounded-full  border-blue-600 cursor-nwse-resize"></div>

    <div id="anchor1" v-if="focus" class="z-1 absolute top-0 left-0 -translate-x-1/2 w-1 h-full cursor-ew-resize bg-red"></div>
    <div id="anchor2" v-if="focus" class="z-1 absolute top-0 left-0 -translate-y-1/2 w-full h-1 cursor-ns-resize bg-red"></div>
    <div id="anchor3" v-if="focus" class="z-1 absolute top-0 right-0 translate-x-1/2 w-1 h-full cursor-ew-resize bg-red"></div>
    <div id="anchor4" v-if="focus" class="z-1 absolute bottom-0 right-0 translate-y-1/2 w-full h-1 cursor-ns-resize bg-red"></div>

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

  if (target.id.startsWith("anchor") || target.id.startsWith("conner")) {
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
    if (target.id == "anchor4") {
      el.value.style.height = 10 * parseInt((y.value - el.value.getBoundingClientRect().top + 10) / 10) + "px"
    } else if (target.id == "anchor3") {
      el.value.style.width = 10 * parseInt((x.value - el.value.getBoundingClientRect().left + 10) / 10) + "px"
    } else if (target.id == "anchor2") {
      let delH = 10 * parseInt((el.value.getBoundingClientRect().top - y.value) / 10)
      el.value.style.top = el.value.getBoundingClientRect().top - delH + "px"
      el.value.style.height = el.value.getBoundingClientRect().height + delH + "px"
    } else if (target.id == "anchor1") {
      let delW = 10 * parseInt((el.value.getBoundingClientRect().left - x.value + 10) / 10)
      console.log("🚀 ~ file: BaseItem.vue:69 ~ watch ~ delW:", delW)
      el.value.style.width = el.value.getBoundingClientRect().width + delW + "px"
      el.value.style.left = el.value.getBoundingClientRect().left - delW + "px"
      console.log("🚀 ~ file: BaseItem.vue:71 ~ watch ~  el.value.style.width:", el.value.style.width)
    } else {
      el.value.style.height = 10 * parseInt((y.value - el.value.getBoundingClientRect().top + 10) / 10) + "px"
      el.value.style.width = 10 * parseInt((x.value - el.value.getBoundingClientRect().left + 10) / 10) + "px"
    }
  }
})

function mouseMove() {
  if (drag.value == 1) {
    drag.value = 2
  }
}

document.body.onmouseup = function () {
  drag.value = 0
  resize.value = 0
}
</script>


