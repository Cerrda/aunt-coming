<script setup lang="ts">
import { DESIGN_HEIGHT, GAP, TABBAR_HEIGHT } from '@/../configs/ui'
import { px2vh } from './utils'
</script>

<template>
  <router-view v-slot="{ Component }">
    <div class="overflow-hidden p-normal" :style="{ height: px2vh(DESIGN_HEIGHT - TABBAR_HEIGHT - GAP * 2) }">
      <keep-alive>
        <component :is="Component" v-motion-slide-visible-left />
      </keep-alive>
    </div>
  </router-view>
  <tab-bar />
</template>
