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
          {
            text: 'Project Management',
            items: [
              {
                text: 'Discuss',
                link: '/management/discuss',
              },
              {
                text: 'Development',
                link: '/management/development',
              },
              {
                text: 'Core Review',
                link: '/management/code-review',
              },
              {
                text: 'Testing',
                link: '/management/testing',
              },
              {
                text: 'Release',
                link: '/management/release',
              },
            ]
          }
        ]
  },

  footer: {
    message: 'Released under the MIT License.',
    copyright: 'Copyright © 2023',
  },



})
