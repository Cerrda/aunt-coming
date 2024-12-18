<script lang="ts" setup>
import type { PickerConfirmEventParams } from 'vant'
import { useStore } from '@/stores'
import { getLottieUrl } from '@/utils'
import Lottie from 'lottie-web'

const store = useStore()
const { data } = storeToRefs(store)
const { removeOne, updateOne } = store

// #region lottie
const element = ref()
onMounted(() => {
  Lottie.loadAnimation({
    container: element.value,
    renderer: 'canvas',
    loop: true,
    autoplay: true,
    path: getLottieUrl('girl.json'),
  })
})
// #endregion

// #region datePicker
const datePickerRef = ref()
const currentDate = ref()
const showDatePicker = ref(false)
let currentYear = ''
let oldTime = ''

function cancelDatePicker() {
  showDatePicker.value = false
  removeOne(currentYear, currentDate.value.join('-'))
}
function confirmDatePicker(newTime: PickerConfirmEventParams) {
  showDatePicker.value = false
  updateOne(oldTime, newTime.selectedValues.join('-'))
}
onClickOutside (datePickerRef, () => {
  showDatePicker.value = false
})
// #endregion

// #region 每一项日期
async function dateClick(year: string, date: string) {
  currentYear = year
  currentDate.value = date.split('-')
  oldTime = `${currentYear}-${currentDate.value.join('-')}`
  showDatePicker.value = true
}
// #endregion
</script>

<template>
  <div class="h-full w-full flex flex-col items-center gap-normal rounded-normal shadow-[0_0_16px_rgba(65,72,86,0.1)]">
    <div ref="element" class="m-t-10 size-200"></div>
    <div class="w-full flex flex-1 flex-col overflow-auto p-x-16">
      <div
        v-for="item in Object.keys(data).reverse()" :key="item"
        v-motion-slide-visible-once-bottom
        class="m-b-16 w-full flex flex-shrink-0 flex-col gap-normal border-4 border-primaryLight rounded-normal p-normal"
      >
        <div class="text-center text-24 color-primary font-extrabold">
          {{ item }}
        </div>
        <div
          v-auto-animate
          class="flex flex-wrap justify-evenly gap-normal"
        >
          <div
            v-for="date in data[item]" :key="date"
            class="rounded-normal bg-primaryLight p-x-8 p-y-4 text-14 color-white"
            @click="dateClick(item, date)"
          >
            {{ date }}
          </div>
        </div>
      </div>
    </div>

    <van-date-picker
      v-if="showDatePicker"
      ref="datePickerRef"
      v-model="currentDate"
      v-motion-slide-bottom
      :columns-type="['month', 'day']"
      cancel-button-text="删除"
      title="请选择"
      class="w-full border-2 border-primary rounded-normal"
      @cancel="cancelDatePicker"
      @confirm="confirmDatePicker"
    />
  </div>
</template>
