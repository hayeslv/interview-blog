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
      { text: '工程化', link: '/engineering/practice/Commitlint配置' },
      { text: 'JavaScript', link: '/javascript/safe/js安全编码规范' },
      { text: 'Part1', link: '/part1/' },
      { text: 'Part2', link: '/part2/' },
    ],
    // 多个侧边栏
    sidebar: {
      '/engineering': [
        {
          title: '理论',
          children: [
            ['/engineering/theory/pm2简介', 'pm2简介'],
          ]
        },
        {
          title: '实践',
          children: [
            ['/engineering/practice/Commitlint配置', 'DevOps之Commitlint配置'],
          ]
        },
        {
          title: '服务器',
          children: [
            ['/engineering/server/Ubuntu服务器', 'Ubuntu服务器'],
            ['/engineering/server/腾讯云', '腾讯云']
          ]
        }
      ],
      '/javascript/': [
        {
          title: "安全",
          children: [
            ['/javascript/safe/js安全编码规范', 'js安全编码规范']
          ]
        }
      ],
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