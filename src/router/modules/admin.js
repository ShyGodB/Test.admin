/*
 * @Author: qbfang
 * @Date: 2022-11-05 11:07
 * @Description: 路由配置 - 管理员
 */ 


import Layout from '@/layout/Index'

const goodRouter = {
    path: '/admin',
    name: 'admin',
    component: Layout,
    meta: { title: '管理员', },
    redirect: '/admin/list',
    children: [
        {
            path: 'list',
            name: 'adminList',
            component: () => import('@/views/admin/List'),
            meta: { title: '管理员' }
        },
    ]
}

export default goodRouter
