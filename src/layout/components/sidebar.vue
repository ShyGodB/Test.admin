<template>
    <el-menu
        class="el-menu-vertical-demo"
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
            menus: [],
            menuItems: [],
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