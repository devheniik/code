import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Code Guide',
  description: 'DevheniiK Code Style Guide.',
  head: [
    ['link', { rel: 'icon', href: '/LogoIcon.svg', type: 'image/svg+xml' }],
  ],
  themeConfig: {
    logo: '/coding.svg',
    siteTitle: '',
    sidebar: [
          {
            text: 'Vue JS',
            items: [
              {
                text: 'Names',
                link: '/vue/names',
              },
              {
                text: 'Template',
                link: '/vue/templates',
              },
              {
                text: 'Script',
                link: '/vue/script',
              },
              {
                text: 'Prettier',
                link: '/vue/prettier',
              },
            ],
          },
        ],
    // nav:
        // [
        //     { text: 'Guide', link: '/guide' },
        //     {
        //     text: 'Dropdown Menu',
        //     items: [
        //         { text: 'Item A', link: '/item-1' },
        //         { text: 'Item B', link: '/item-2' },
        //         { text: 'Item C', link: '/item-3' }
        //     ]
        //     }
        // ]
  },

  footer: {
    message: 'Released under the MIT License.',
    copyright: 'Copyright © 2023',
  },



})
