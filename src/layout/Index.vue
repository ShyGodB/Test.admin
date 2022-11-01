<template>
    <div id="Layout">
        <div class="d-inline-block f-left fill-h" style="background-color:gray">
            <el-scrollbar
                wrap-class="list"
                wrap-style="color: red;"
                view-style="font-weight: bold;"
                view-class="view-box"
                :native="false">
                <sidebar />
            </el-scrollbar>
        </div>

        <div class="d-inline-block f-left right">
            <el-scrollbar wrap-class="list" view-class="view-box" :native="false">
                <div class="content">
                    <el-row>
                        <el-col :span="18">
                            <breadcrumb />
                        </el-col>

                        <el-col :span="6" class="f-right">
                            <loginuser />
                        </el-col>
                    </el-row>

                    <router-view />
                </div>
            </el-scrollbar>
        </div>
    </div>
</template>

<script>
import sidebar from "./components/sidebar.vue";
import breadcrumb from "./components/breadcrumb.vue";
import loginuser from "./components/loginuser.vue";
export default {
    name: "Layout_page",
    components: {
        sidebar,
        breadcrumb,
        loginuser
    },
    data() {
        return {};
    }
};
</script>

<style scoped>
#Layout {
    width: 100%;
    height: 100%;
}
.el-row {
    height: 100vh;
}
.right {
    width: calc(100% - 220px);
    float: right;
}
.right-wide {
    width: calc(100% - 64px);
    float: right;
}
.fill-h {
    height: 100vh;
}
.content {
    height: 100vh;
}
.el-row {
    height: 56px;
}

.float-right {
    float: left;
}
</style>
