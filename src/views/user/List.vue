<template>
    <div>
        <!-- <el-form :model="ruleForm" ref="ruleForm" label-width="100px">
            <el-row>
                <el-col :span="6">
                    <el-form-item label="用户编号" prop="userId">
                        <el-input v-model="ruleForm.userId" type="number" @keyup.enter.native="list"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="用户姓名" prop="nickName">
                        <el-input v-model="ruleForm.nickName" @keyup.enter.native="list"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="用户手机" prop="phone">
                        <el-input v-model="ruleForm.phone" @keyup.enter.native="list"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="商户" prop="mchId">
                        <el-select @change="list" v-model="ruleForm.mchId" filterable clearable placeholder="请选择">
                            <el-option v-for="item in allMch" :key="item.id" :label="item.name" :value="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="注册时间" prop="times">
                        <el-date-picker
                            v-model="ruleForm.times"
                            type="datetimerange"
                            :picker-options="timeDouble"
                            :default-time="defaultTime"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                        ></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form> -->

        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="id" label="编号" width="120" :show-overflow-tooltip="true"></el-table-column>

            <el-table-column prop="nickName" label="昵称" :show-overflow-tooltip="true"></el-table-column>

            <el-table-column prop="realName" label="姓名" :show-overflow-tooltip="true"></el-table-column>

            <el-table-column prop="phone" label="手机" width="120" :show-overflow-tooltip="true"></el-table-column>

            <el-table-column prop="regSource" label="注册来源" width="180" :show-overflow-tooltip="true"></el-table-column>

            <el-table-column prop="createTime" label="注册时间" width="180" :show-overflow-tooltip="true"></el-table-column>

            <el-table-column label="操作" width="120" fixed="right">
                <template slot-scope="scope">
                    <el-button size="mini" type="info" @click.stop="info(scope.row)" round>详情</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="ruleForm.pageIndex"
            :page-sizes="[10, 15, 20, 30, 50, 100]"
            :page-size="ruleForm.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
        ></el-pagination>
    </div>
</template>


<script>
export default {
    name: "user_list_page",
    data() {
        return {
            // timeDouble: this.$config.time.timeDouble,
            // defaultTime: this.$config.time.defaultTime,
            allMch: [],
            allStore: [],
            tableData: [],
            total: 0,
            ruleForm: {
                pageIndex: 1,
                pageSize: 10,
                userId: '',
                nickName: "",
                phone: "",
                times: [],
                mchId: ''
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    this.list();
                } else {
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
            this.list();
        },
        handleCurrentChange(pageIndex) {
            this.ruleForm.pageIndex = pageIndex;
            this.list();
        },
        handleSizeChange(pageSize) {
            this.ruleForm.pageSize = pageSize;
            this.list();
        },
        // info(row) {
        //     this.$store.state.userId = row.userId;
        //     localStorage.setItem("blifeAdminStore", JSON.stringify(this.$store.state));
        //     const { href } = this.$router.resolve("/user/detail");
        //     window.open(href, "_blank");
        // },
        async getAllMch() {
            this.allMch = await this.$asyncTool.getAllMch();
        },
        async getAllStore() {
            this.allStore = await this.$asyncTool.getAllStore();
        },
        info() {
            // this.$store.state.userId = row.userId;
            // this.$tool.open('/user/detail')
            console.log('123123kasdfasjdk')
        },
        async list() {
            const res = await this.$api.get("/listUser", {});
            this.tableData = res.list;
        },
    },
    created() {
        this.list();
        // this.getAllMch();
    }
};
</script>


<style scoped>
</style>
