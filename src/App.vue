<script setup lang="ts">
import { usePermissionStore } from './stores/permission'

usePermissionStore()
</script>

<template>
  <naive-provider>
    <router-view />
  </naive-provider>
</template>
