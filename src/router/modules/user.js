/*
 * @Author: qbfang
 * @Date: 2022-11-05 11:07
 * @Description: 路由配置 - 用户管理
 */ 


import Layout from '@/layout/Index'

const userRouter = {
    path: '/user',
    name: 'user',
    component: Layout,
    meta: { title: '用户管理', },
    redirect: '/user/list',
    children: [
        {
            path: 'list',
            name: 'userList',
            component: () => import('@/views/user/List'),
            meta: { title: '用户列表' }
        },
    ]
}

export default userRouter
