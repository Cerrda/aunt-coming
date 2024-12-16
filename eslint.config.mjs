import antfu from '@antfu/eslint-config'

export default antfu({
  // 使用prettier 格式化css html 等
  formatters: true,
  // unocss 检测&格式化
  unocss: true,
  // vue的eslint配置
  vue: true,
  // 保存删除未引入的代码
  isInEditor: false,
  // 9x版本 忽略文件这种配置方式 废弃掉eslintignore
  ignores: [
    '*.sh',
    '*.md',
    '*.woff',
    '*.ttf',
    '.idea',
    '.husky',
    '.local',
    '/public',
    '/docs',
    '/bin',
    'node_modules',
    'Dockerfile',
  ],
  rules: {
    'node/prefer-global/process': 'off',
    'no-console': 'off',
    'vue/component-name-in-template-casing': ['error', 'kebab-case', { registeredComponentsOnly: false }],
    'vue/component-definition-name-casing': ['error', 'kebab-case'],
    'vue/html-self-closing': 'off',
  },
})
