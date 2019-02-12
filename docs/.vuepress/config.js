module.exports = {
    title: 'arman-ui',
    description: '一个简单好用的UI框架',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '安装', link: '/guide/install' },
            { text: '快速上手', link: '/guide/start' },
            { text: 'GitHub', link: 'https://github.com/Arman19941113/arman-ui' },
        ],
        sidebar: [
            {
                title: '开发指南',
                path: '/guide/',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    '/guide/install',
                    '/guide/start'
                ]
            },
            {
                title: '组件',
                path: '/component/',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    '/component/button',
                    '/component/input',
                    '/component/tabs',
                    '/component/layout',
                    '/component/toast',
                    '/component/collapse'
                ]
            }
        ]
    }
}