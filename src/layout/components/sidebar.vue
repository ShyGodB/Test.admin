<template>
    <el-menu
        class="el-menu-vertical-demo"
        :collapse="false"
        background-color="#39527F"
        text-color="#ffffff"
        :router="true"
        :default-active="activeMenu"
        active-text-color="#fd7e14"
    >
        <el-menu-item v-for="item in menuItems" :index="item.path" :key="item.path">
            <i style="color:#ffffff;" :class="item.icon"></i>
            <span slot="title">{{ item.name }}</span>
        </el-menu-item>

        <el-submenu v-for="item in subMenus" :index="item.path" :key="item.path">
            <template slot="title">
                <i style="color:#ffffff;" :class="item.icon"></i>
                <span slot="title">{{ item.name }}</span>
            </template>
            <el-menu-item v-for="c in item.children" :index="c.path" :key="c.path">
                <i style="color:#ffffff;" :class="c.icon"></i>
                <span slot="title">{{ c.name }}</span>
            </el-menu-item>
        </el-submenu>
    </el-menu>
</template>


<script>
export default {
    name: "sidebar_page",
    data() {
        return {
            menuItems: [{
                name: '主页',
                path: '/',
                icon: 'el-icon-s-home'
            }, {
                name: '用户列表列表',
                path: '/user',
                icon: 'el-icon-user-solid'
            }, {
                name: '聊天室',
                path: '/im',
                icon: 'el-icon-s-custom'
            }, {
                name: '商品管理',
                path: '/good',
                icon: 'el-icon-s-order'
            }, {
                name: '管理员',
                path: '/admin',
                icon: 'el-icon-s-tools'
            }],
            subMenus: [],
            activeMenu: "",
        };
    },
    computed: {
        
    },
    methods: {},
    created() {
        
    }
};
</script>


<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 220px;
    height: 100vh;
}
</style>