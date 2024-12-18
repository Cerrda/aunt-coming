<script lang="ts" setup>
import { useStore } from '@/stores'
import { getLottieUrl } from '@/utils'
import lottie, { type AnimationItem } from 'lottie-web'
import AddButton from './components/add-button.vue'

const store = useStore()
const { addOne, isRecords } = store

// #region lottie
// 礼物
const element = ref()
let anim: AnimationItem | null = null
onMounted(() => {
  anim = lottie.loadAnimation({
    container: element.value,
    renderer: 'canvas',
    loop: false,
    autoplay: false,
    path: getLottieUrl('cat.json'),
  })
})
// 烟花
const fires = ref()
async function playFireworks() {
  lottie.loadAnimation({
    container: fires.value,
    renderer: 'canvas',
    loop: true,
    autoplay: true,
    path: getLottieUrl('fire-works.json'),
  })
}
// #endregion

// #region 添加
let count = 0
const tipIndex = ref(-1)
const tooltip = [
  '记录成功',
  '一天不可能来两次吧',
  '说了你怎么不信呢',
  '那你就点吧',
]
function add() {
  count++
  // 点击次数是偶数表示关闭tooltip
  if (count % 2 === 0) {
    return
  }
  // 已经是最后一个tooltip
  if (tipIndex.value === tooltip.length - 1) {
    tooltip.push(`那你就点吧 x ${tipIndex.value - 2}`)
  }
  tipIndex.value++
  if (tipIndex.value) {
    return
  }
  if (isRecords()) {
    tipIndex.value++
    return
  }
  addOne()
  anim?.playSegments([0, 100], true)
  playFireworks()
}
// #endregion
</script>

<template>
  <div class="relative h-full w-full rounded-normal shadow-[0_0_16px_rgba(65,72,86,0.1)]">
    <div ref="element" class="h-398 translate-y-60"></div>
    <div
      ref="fires"
      class="absolute left-0 top-0 z-[-1] h-530"
    ></div>
    <div class="absolute bottom-60 left-[50%] translate-x-[-50%]">
      <add-button
        :words="tooltip[tipIndex]"
        @click="add"
      />
    </div>
  </div>
</template>
