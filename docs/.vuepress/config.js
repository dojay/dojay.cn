module.exports = {
  title: '隔壁老王的随笔', // 网站title
  description: '隔壁老王的随笔,前端笔记,隔壁老王,老王笔记,前端,笔记', // 网站描述seo
  // theme: 'yubisaki',
  markdown: {
    lineNumbers: true
  },
  head: [
    ['link', { rel: 'icon', type: "image/png", href: '/favicon.png' }]
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
    // ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    // ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    // ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    // ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    // ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    // ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    search: false,
    logo: '/logo.png',
    nav: [
      {
        text: '首页',
        link: '/'
      }, {
        text: '前端随笔',
        link: '/fe/'
      }, {
        text: '前端资源',
        link: '/resource/'
      }, {
        text: '发现生活',
        link: '/live/'
      }
    ]
  }
}