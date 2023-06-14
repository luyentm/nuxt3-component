<template >
  <div ref="el" style="position: absolute" class="cursor-move relative w-100px h-50px" :class="focus ? 'outline outline-blue-500 outline-2 outline-dashed' : 'outline-none'" @mousedown="mouseDown" @mousemove="mouseMove" @mouseup="mouseUp">
    <Container v-model="value_data" class="z-0 select-none" :class="value_data.class" />
    {{ x }} {{ y }}
    <div>
      <div id="conner1" v-if="focus" class="z-2 absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white  border-2 rounded-full border-blue-600 cursor-nwse-resize"></div>
      <div id="conner2" v-if="focus" class="z-2 absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-3 h-3  bg-white  border-2 rounded-full  border-blue-600 cursor-nesw-resize"></div>
      <div id="conner3" v-if="focus" class="z-2 absolute bottom-0 left-0 w-3 h-3 -translate-x-1/2 translate-y-1/2 bg-white  border-2 rounded-full border-blue-600 cursor-nesw-resize"></div>
      <div id="conner4" v-if="focus" class="z-2 absolute bottom-0 right-0 w-3 h-3  translate-x-1/2 translate-y-1/2 bg-white  border-2 rounded-full  border-blue-600 cursor-nwse-resize"></div>

      <div id="anchor1" v-if="focus" class="z-1 absolute top-0 left-0 -translate-x-1/2 w-3 h-full cursor-ew-resize hover:bg-blue duration-400"></div>
      <div id="anchor2" v-if="focus" class="z-1 absolute top-0 left-0 -translate-y-1/2 w-full h-3 cursor-ns-resize hover:bg-blue duration-400"></div>
      <div id="anchor3" v-if="focus" class="z-1 absolute top-0 right-0 translate-x-1/2 w-3 h-full cursor-ew-resize hover:bg-blue duration-400"></div>
      <div id="anchor4" v-if="focus" class="z-1 absolute bottom-0 right-0 translate-y-1/2 w-full h-3 cursor-ns-resize hover:bg-blue duration-400"></div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(['modelValue'])
const value_data = computed({
  get() {
    return props.modelValue
  },
  // set(value) {
  //   emit('update:modelValue', value)
  // }
})
import { onClickOutside, useMouse } from '@vueuse/core'
const { x: x, y: y, sourceType } = useMouse({ touch: false })
const el = ref(null)
const focus = ref(false)
const resize = ref(0)
const drag = ref(0)
let delX = 0
let delY = 0
let target = ref()

onClickOutside(el, (event) => {
  focus.value = false
  drag.value = 0
  resize.value = 0
})
function mouseDown(event) {
  console.log(el.value.parentElement.getBoundingClientRect().left)
  console.log(el.value.parentElement.getBoundingClientRect().top)
  target.value = event.target
  var bounding = target.value.getBoundingClientRect();
  delX = event.clientX - bounding.left;
  delY = event.clientY - bounding.top;
  focus.value = true

  if (target.value.id.startsWith("anchor") || target.value.id.startsWith("conner")) {
    resize.value = 1
  } else {
    drag.value = 1
  }
}

watch(() => [x.value, y.value, drag.value], (newValue, oldValue) => {
  let _x = 10 * (Math.round((x.value - delX - el.value.parentElement.getBoundingClientRect().left) / 10))
  let _y = 10 * (Math.round((y.value - delY - el.value.parentElement.getBoundingClientRect().top) / 10))
  _x = _x < 0 ? 0 : _x
  _y = _y < 0 ? 0 : _y
  if (drag.value == 2) {
    el.value.style.left = `${_x}px`
    el.value.style.top = `${_y}px`
  }

  if (resize.value == 1) {
    if (target.value.id == "anchor4") {
      el.value.style.height = 10 * Math.round((y.value - el.value.getBoundingClientRect().top) / 10) + "px"
    } else if (target.value.id == "anchor3") {
      el.value.style.width = 10 * Math.round((x.value - el.value.getBoundingClientRect().left) / 10) + "px"

    } else if (target.value.id == "anchor2") {
      let delH = 10 * Math.round((el.value.getBoundingClientRect().top - y.value) / 10)
      el.value.style.top = el.value.getBoundingClientRect().top - delH + "px"
      el.value.style.height = el.value.getBoundingClientRect().height + delH + "px"
    } else if (target.value.id == "anchor1") {
      let delW = 10 * Math.round((x.value - el.value.getBoundingClientRect().left) / 10)
      console.log("🚀 ~ file: BaseItem.vue:81 ~ watch ~ delW:", delW)
      el.value.style.left = el.value.getBoundingClientRect().left + delW - el.value.parentElement.getBoundingClientRect().left + "px"
      el.value.style.width = el.value.getBoundingClientRect().width - delW + "px"
    } else {
      // el.value.style.height = 10 * Math.round((y.value - el.value.getBoundingClientRect().top - el.value.parentElement.getBoundingClientRect().top) / 10) + "px"
      // el.value.style.width = 10 * Math.round((x.value - el.value.getBoundingClientRect().left - el.value.parentElement.getBoundingClientRect().left) / 10) + "px"
    }
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
}


document.body.onmouseup = function () {
  drag.value = 0
  resize.value = 0
}
</script>



