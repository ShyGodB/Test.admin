<template>
    <div id="loginuser" class="f-right pt-2 pr-3">
        <el-dropdown>
            <span class="el-dropdown-link">
                <span class="pr-3 tc-black">管理员：方奇兵</span>
                <img src="../../assets/img/tt.png" style="width:44px;height:44px;" />
                <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                    <el-button type="text">退出</el-button>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
export default {
    name: "loginuser_page",
    data() {
        return {
            
        };
    },
    methods: {
        
    },
};
</script>


<style scoped>
#loginuser {
    cursor: pointer;
}
</style>
