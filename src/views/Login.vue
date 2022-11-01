<template>
    <div id="login" class="h-100">
        <div class="login-box">
            这里是登录页面
            <el-row>
                <el-col :span="14">
                    <div class="login-box-left">
                        <el-row>
                            <el-col :span="8">
                                <img src="@/assets/img/blife.png" class="login-box-left-img" alt="">
                            </el-col>
                            <el-col :span="15">
                                <div class="login-box-left-title">
                                    <div>养生保健实体数字化运营</div>
                                    <div>一站式服务平台</div>
                                </div>
                            </el-col>
                            <el-col :span="1">
                                <div class="login-box-left-blueBox"></div>
                            </el-col>
                        </el-row>
                    </div>
                    <div>
                        <img src="@/assets/img/bangong.png" class="login-box-left-img-bangong" alt="">
                    </div>
                </el-col>

                <el-col :span="10" class="h-100">
                    <div class="login-box-right">
                        <div class="welcomeLogin">
                            欢迎登陆
                        </div>
                        <div class="login-box-right-accountPassword">
                            <div class="login-box-right-accountPassword-account">
                                <div class="text-1">账号</div>
                                <input type="text" v-model="form.phone" placeholder="请输入账号">
                            </div>
                            <div class="login-box-right-accountPassword-password">
                                <div class="text-1">密码</div>
                                <input type="password" v-model="form.password" placeholder="请输入密码">
                            </div>
                            <div class="login-box-right-accountPassword-toast">
                                <span class="login-box-right-accountPassword-toast-apply">
                                    还没有账号？
                                    <span style="color:#006DFE;cursor:pointer;" @click="goToApply">去申请</span>
                                </span>
                                <span class="login-box-right-accountPassword-toast-forgotPassword" @click="forgotPassword">
                                    忘记密码
                                </span>
                            </div>
                        </div>
                        <div style="margin-top:120px;">
                            <div class="loginBtn" @click="login">登陆</div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>

        <el-dialog title="app下载" :visible.sync="addDialog">
            <div>
                <p>应用下载方法: 请使用手机浏览器扫码下载</p>
                <el-row>
                    <el-col :span="7" v-for="(item, index) in packageList" :key="index" :offset="index > 0 ? 1 : 0">
                        <el-card :body-style="{ padding: '0px' }">
                        <img :src="item.qrcodeUrl" class="image">
                        <div style="padding: 14px;">
                            <div style="font-weight:600;font-size:28px;text-align:center;">{{ item.appName }}</div>
                            <!-- <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                            <el-button type="text" class="button">操作按钮</el-button>
                            </div> -->
                        </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>

            <div slot="footer" class="dialog-footer">
                <el-button @click="addDialog = false">取 消</el-button>
                <el-button type="primary" @click="add">确 定</el-button>
            </div>
        </el-dialog>

        <el-dialog title="上传文件" :visible.sync="uploadDialog">
            <div>
                <o-upload ref="upload" :uploadData="uploadData"></o-upload>
            </div>

            <div slot="footer" class="dialog-footer">
                <el-button @click="uploadDialog = false">取 消</el-button>
                <el-button type="primary" @click="save">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>


<script>
export default {
    name: "login_page",
    data() {
        return {
            
        };
    },
    methods: {
        
    },
    created() {
        let isLogin = false;
        if (!isLogin) {
            this.$router.push('/login')
        }
    }
};
</script>


<style scoped>
input {
    width: 451px;
    border: 0;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
}
#login {
    height: 100%;
    width: 100%;
    /* min-height: 940px; */
    background: url(../assets/img/bg.png) no-repeat;
    overflow: hidden;
    background-size: cover;
}
.login-box {
    width: 1251px;
    height: 724px;
    margin: 0 auto;
    background: #fff;
    padding: 35px 35px 0 35px;
    border: 1px solid #eaeaea;
    border-radius: 20px;
    box-shadow: 0 0 25px #000000;
    position: relative;
    top: 100px;
}
.login-box-left {
    padding: 15px 60px 0 0;
}
.login-box-left-img {
    width: 123px;
    height: 123px;
    margin: 0 0 0 42px;
}
.login-box-left-title {
    text-align: end;
    margin: 5px 10px 0 0;
    color: #666666;
    font-weight: bold;
    font-size: 30px;
}
.login-box-left-blueBox {
    width: 9px;
    height: 78px;
    background-color: #006DFE;
    margin-top: 15px;
}
.login-box-left-img-bangong {
    width: 600px;
}
.login-box-right {
    margin: 0 20px;
}
.welcomeLogin {
    text-align: center;
    color: #333333;
    font-size: 48px;
    font-weight: bold;
    margin-top: 85px;
}
.login-box-right-accountPassword {
    margin-top: 80px;
}
.login-box-right-accountPassword-account {
    border-bottom: 1px solid #cccccc;
}
.login-box-right-accountPassword-password {
    border-bottom: 1px solid #cccccc;
    margin-top: 20px;
}
.login-box-right-accountPassword-toast {
    margin-top: 5px;
}
.login-box-right-accountPassword-toast-apply {
    color: #999999;
    font-weight: bold;
    font-size: 18px;
    text-align: left;
}
.login-box-right-accountPassword-toast-forgotPassword {
    color: #999999;
    font-weight: bold;
    font-size: 18px;
    float: right;
    cursor: pointer;
}
.loginBtn {
    width: 451px;
    height: 62px;
    background: #006DFE;
    text-align: center;
    color: #ffffff;
    font-size: 22px;
    font-weight: medium;
    line-height: 62px;
    border-radius: 6px;
    cursor: pointer;
}

/* - common - 公共样式: 即多出使用 */
.text-1 {
    color: #333333;
    font-weight: bold;
    font-size: 22px;
    margin-bottom: 4px;
}


.time {
    font-size: 13px;
    color: #999;
}
  
.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.button {
    padding: 0;
    float: right;
}

.image {
    width: 100%;
    display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
  
.clearfix:after {
    clear: both
}
</style>
