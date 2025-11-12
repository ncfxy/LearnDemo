import { defineConfig } from 'vitepress'
import { withMermaid, MermaidPlugin } from 'vitepress-plugin-mermaid'
import dayjs from 'dayjs'

// https://vitepress.dev/reference/site-config
export default withMermaid(defineConfig({
  title: "My LearnDemo Project",
  description: "My LearnDemo Project, A VitePress Site",
  
  // 源目录（相对于 root）
  srcDir: '../',
  markdown: {
    lineNumbers: true,
  },
  mermaid: {
    theme: 'dark'
  },
  vite: {
    optimizeDeps: {
      include: [
        'mermaid'
      ]
    },
    build: {
      rollupOptions: {
        external: [
          'vue/server-renderer',
          'vue'
        ]
      }
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/index' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
})
)

// export default withMermaid(config)
