/*
 * @Author: qbfang
 * @Date: 2022-11-05 11:07
 * @Description: 路由配置 - 商品管理
 */ 


import Layout from '@/layout/Index'

const goodRouter = {
    path: '/good',
    name: 'good',
    component: Layout,
    meta: { title: '商品管理', },
    redirect: '/good/list',
    children: [
        {
            path: 'list',
            name: 'goodList',
            component: () => import('@/views/good/List'),
            meta: { title: '商品管理' }
        },
    ]
}

export default goodRouter
