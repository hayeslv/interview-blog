import { defineConfig } from "vuepress/config"

module.exports = defineConfig({
  title: '前端进阶',
  description: '学习前端',
  head: [
    ['link', { rel: 'icon', href: '/tool.ico' }]
  ],
  themeConfig: {
    logo: '/tool.png',
    // 头部导航
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Part1', link: '/part1/' },
      { text: 'Part2', link: '/part2/' },
      { text: 'Part3', link: '/part3/' },
    ],
    // 多个侧边栏
    sidebar: {
      '/part1/': [
        {
          title: 'part1', // 必要的
          // path: '/part1/', // 标题的跳转链接
          // collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 默认为1
          children: [
            ['/part1/chapter1', '随便起个标题'],
            '/part1/chapter2'
          ]
        },
      ],
      '/part2/': [
        {
          title: 'part2',
          children: [
            '/part2/',
            '/part2/chapter1',
            '/part2/chapter2',
          ]
        }
      ]
    }
    // 单个侧边栏
    // sidebar: [
    //   {
    //     title: 'part1', // 必要的
    //     // path: '/part1/', // 标题的跳转链接
    //     // collapsable: false, // 可选的, 默认值是 true,
    //     sidebarDepth: 1, // 默认为1
    //     children: [
    //       ['/part1/chapter1', '随便起个标题'],
    //       '/part1/chapter2'
    //     ]
    //   },
    //   {
    //     title: 'part2',
    //     children: [
    //       '/part2/',
    //       '/part2/chapter1',
    //       '/part2/chapter2',
    //     ]
    //   }
    //   // '/',
    //   // '/part1/',
    //   // ['/part1/chapter1', '随便起个标题']
    // ]
  }
})