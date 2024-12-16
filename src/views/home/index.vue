<script setup lang="ts">
import { queryMiddleAPI } from '@/service/api'
import useRequest from '@/service/use-request'
import NumberFlow from '@number-flow/vue'

const { loading, data, run } = useRequest(queryMiddleAPI, { immediate: false })
const { items, fruits, removeItem, randomize, handleMidData } = useAutoAnimate()

function useAutoAnimate() {
  const items = ref(['😏', '😐', '😑', '😒', '😕', '😔', '😞', '😟', '😠', '😡', '😢', '😣', '😤', '😥', '😦', '😧', '😨', '😩', '😪', '😫', '😬', '😭', '😮', '😯', '😰', '😱', '😲', '😳', '😴', '😵', '😶', '😷', '🙁', '🙂', '🙃', '🙄', '🤔', '🤨', '🤯', '🥵', '🥶', '🥴', '🤬', '🤫', '🤥', '🤢', '🤮', '🤧', '🥳', '🥸', '😈'])
  const fruits = ref(['🍓   ', '🥥   ', '🥝   ', '🍇   '])

  const removeItem = (data: any[], index: number) => data?.splice(index, 1)
  const randomize = () => items.value.sort(() => (Math.random() > 0.5 ? 1 : -1))
  const handleMidData = () => data.value?.length ? data.value.length = 0 : run()

  return { items, fruits, removeItem, randomize, handleMidData }
}
</script>

<template>
  <div class="flex flex-col select-none gap-10 px-100 py-50">
    <n-card v-motion-slide-top embedded>
      <div class="relative flex flex-col gap-10 overflow-hidden">
        <div v-auto-animate class="flex flex-wrap items-center gap-10">
          <div v-for="(item, index) in items" :key="item" class="cursor-pointer border rounded-4 p-10 hover:border-hover-primary" @click="removeItem(items, index)">
            {{ item }}
          </div>
        </div>
        <n-button type="primary" @click="randomize">
          打乱顺序<number-flow :value="items.length"></number-flow>
        </n-button>
      </div>
    </n-card>

    <permission need-permission="query">
      <n-card v-motion-slide-bottom embedded>
        <div v-auto-animate class="flex flex-col gap-10">
          <n-button type="primary" :loading="loading" :disabled="loading" @click="handleMidData">
            {{ data?.length ? '清空数据' : '获取数据' }}
          </n-button>
          <n-card v-if="data?.length">
            <div v-auto-animate class="flex flex-col gap-10">
              <div v-for="(item, index) in data" :key="item.ROW_NUM!" class="flex cursor-pointer items-center justify-between border rounded-4 p-10 hover:border-hover-primary">
                <div>{{ fruits[index] + item.SCENE_SUBCLASS }}</div>
                <div class="i-pixelarticons:close hover:color-hover-error" @click="removeItem(data, index)"></div>
              </div>
            </div>
          </n-card>
        </div>
      </n-card>
    </permission>

    <blur-reveal :delay="0.2" :duration="0.75">
      <div class="text-44 font-bold">
        Hey there 👋
      </div>
      <div class="text-24">
        How is it going?
      </div>
    </blur-reveal>

    <letter-pullup words="Staggered Letter Pull Up" />

    <text-generate-effect words="Nuxt is an open source framework that makes web development intuitive and powerful.Create performant and production-grade full-stack web apps and websites with confidence." />
  </div>
</template>
