import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "app manual",
  base: '/manual/',
  description: "app decribe,manual",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '小习惯', link: '/habit/home' },
      { text: '萌猪记账', link: '/itally/home' }
    ],

    sidebar: [
      {
        text: '小习惯',
        items: [
          { text: '隐私政策', link: '/habit/privacy' },
          { text: '用户协议', link: '/habit/service' }
        ]
      },
      {
        text: '萌猪记账',
        items: [
           { text: 'Markdown Examples', link: '/markdown-examples' },
           { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
