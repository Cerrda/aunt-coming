<script setup lang="ts">
interface LetterPullupProps {
  class?: string
  words: string
  delay?: number
}

const props = defineProps<LetterPullupProps>()

const letters = props.words.split('')

const pullupVariant = {
  initial: { y: 100, opacity: 0 },
  enter: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * (props.delay ? props.delay : 50),
    },
  }),
}
</script>

<template>
  <div class="flex">
    <div
      v-for="(letter, index) in letters"
      :key="letter"
    >
      <div
        v-motion
        :initial="pullupVariant.initial"
        :enter="pullupVariant.enter(index)"
        :class="props.class"
      >
        <span v-if="letter === ' '">&nbsp;</span>
        <span v-else>{{ letter }}</span>
      </div>
    </div>
  </div>
</template>
