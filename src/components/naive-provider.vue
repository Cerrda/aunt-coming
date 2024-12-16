<script setup lang="ts">
import { themeOverrides } from '@/../configs/theme'
import { dateZhCN, zhCN } from 'naive-ui'

const NaiveProviderContent = defineComponent({
  name: 'naive-provider-content',
  setup() {
    window.$loadingBar = useLoadingBar()
    window.$dialog = useDialog()
    window.$message = useMessage()
    window.$notification = useNotification()
  },
  render() {
    return undefined
  },
})
</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" abstract :theme-overrides="themeOverrides">
    <n-theme-editor>
      <n-loading-bar-provider>
        <n-dialog-provider>
          <n-notification-provider>
            <n-message-provider>
              <slot />
              <naive-provider-content />
            </n-message-provider>
          </n-notification-provider>
        </n-dialog-provider>
      </n-loading-bar-provider>
    </n-theme-editor>
  </n-config-provider>
</template>
