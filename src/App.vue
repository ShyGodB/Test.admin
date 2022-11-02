<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "app",
    provide() {
        return {
            reload: this.reload
        };
    },
    data() {
        return {
            canPay: false,
            tab: "",
            isLogin: true,
            isRouterAlive: true
        };
    },
    methods: {
        reload() {
            // 备注
            this.isRouterAlive = false;
            // if (this.$store.state.userInfo) {
            //     this.isLogin = true;
            // } else {
            //     this.isLogin = false;
            // }
            this.$nextTick(() => {
                this.isRouterAlive = true;
            });
        },
        getStore() {
            // 在页面加载时读取localStorage里的状态信息
            // if (localStorage.getItem("blifeAdminStore")) {
            //     this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(localStorage.getItem("blifeAdminStore"))));
            // }

            // //在页面刷新时将vuex里的信息保存到localStorage里
            // window.addEventListener("beforeunload", () => {
            //     localStorage.setItem("blifeAdminStore", JSON.stringify(this.$store.state));
            // });
        },
        clear() {
            localStorage.setItem("blifeLastLeaveTime", Date.now());
            localStorage.removeItem("blifeAdminStore");
        },
        check() {
            const currentDate = Date.now();
            const lastestLeaveTime = Number(localStorage.getItem("blifeLastLeaveTime") || currentDate);
            if (currentDate - lastestLeaveTime > 10000) {
                this.clear();
            }
        },
        async orderEvent() {
            // const res = await this.$api.post("/order/orderEvent", {});
            // if (res.success && res.data.newOrder) {
            //     this.$message.warning("您有新订单，请及时处理!");
            //     const audio = this.$refs.audio;
            //     if (audio && this.canPay) {
            //         audio.currentTime = 0;
            //         audio && audio.play();
            //         setTimeout(() => {
            //             audio && audio.pause();
            //         }, 10000);
            //     }
            // }
        }
    },
    created() {
        // this.getStore();
        // if (!this.$store.state.userInfo) {
        //     this.$router.push("/login");
        // } else {
        //     this.orderEvent();
        // }
    },
    mounted() {
        // let self = this;
        // document.getElementById("app").addEventListener("click", () => {
        //     self.canPay = true;
        // });
    },
    beforeDestroy() {
        this.clear();
    },
    destroyed() {
    }
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
