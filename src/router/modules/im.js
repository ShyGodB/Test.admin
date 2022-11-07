/*
 * @Author: qbfang
 * @Date: 2022-11-05 11:07
 * @Description: 路由配置 - 聊天室
 */ 


import Layout from '@/layout/Index'

const imRouter = {
    path: '/im',
    name: 'im',
    component: Layout,
    meta: { title: '聊天室', },
    redirect: '/im/list',
    children: [
        {
            path: 'list',
            name: 'imList',
            component: () => import('@/views/im/List'),
            meta: { title: '聊天室' }
        },
    ]
}

export default imRouter
