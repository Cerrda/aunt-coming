<script setup lang="ts">
</script>

<template>
  <nav-bar />
  <router-view v-slot="{ Component }">
    <div class="p-[var(--van-gap)]">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </div>
  </router-view>
  <tab-bar />
</template>
