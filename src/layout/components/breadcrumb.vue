<template>
    <div id="breadcrumb">
        <div class="sidebar-left-icon d-inline-block px-2">
            <i
                :class="'el-icon-s-'+ (true ? '' : 'un') + 'fold'"
                class="tfs-22"
                @click="changeIsOpen"
            ></i>
        </div>
        <el-breadcrumb
            class="sidebar-middle-breadcrumb d-inline-block ml-2"
            separator-class="el-icon-arrow-right"
        >
            <el-breadcrumb-item :to="'/'">首页</el-breadcrumb-item>
            <el-breadcrumb-item
                :to="item.path"
                v-for="(item, index) in list"
                :key="index"
            >{{item.meta.title}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    name: "breadcrumb_page",
    data() {
        return {
            list: []
        };
    },
    methods: {
        changeIsOpen() {
            this.$store.commit("negatIsCollapse");
        },
        resetBreadcrumb() {
            this.list = this.$route.matched || [];
        }
    },
    watch: {
        $route: "resetBreadcrumb"
    },
    created() {
        this.resetBreadcrumb();
    }
};
</script>

<style scoped>
#breadcrumb {
    top: 0;
    font-size: 16px;
    height: 56px;
    line-height: 56px;
    padding-left: 8px;
}
</style>