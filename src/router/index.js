import Vue from 'vue'
import VueRouter from 'vue-router'

// 注册路由
Vue.use(VueRouter)

// 分别引入各个模块的路由
// import orderRouter from './modules/order'
import userRouter from './modules/user'
import imRouter from './modules/im'
import goodRouter from './modules/good'
import adminRouter from './modules/admin'

// import techRouter from './modules/tech'
// import operationRouter from './modules/operation'
// import authRouter from './modules/auth'
// import supportRouter from './modules/support'
// import financeRouter from './modules/finance'
// import settingRouter from './modules/setting'
// import dataRouter from './modules/data'
// import otherRouter from './modules/other'

const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('@/layout/Index.vue'),
        redirect: '/home',
        meta: { title: '主页' },
        children: [
            {
                path: 'home',
                name: '主页',
                meta: { title: '主页' },
                component: () => import('@/views/Index.vue')
            },
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue')
    },
    userRouter,
    imRouter,
    goodRouter,
    adminRouter,
]

// 实例化路由对象
const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: routes
})

// 路由导航守卫，在这里可以进行一系列操作，如：设置浏览器标题，权限验证
// router.beforeEach((to, from, next) => {
//     document.title = to.meta && to.meta.title || '芭乐生活后台管理系统'
//     next()
// })


export default router