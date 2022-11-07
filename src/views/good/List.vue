<template>
    <div class="w-100">
        <h1>商品列表页</h1>
    </div>
</template>

<script>
export default {
    name: "Good_page",
    data() {
        return {
            role: '',
            today: {},
            seven: [],
            mch: {},
            user: {},
            total: {},
            notice: []
        };
    },
    methods: {
        
    },
    created() {
        
    }
};
</script>


<style scoped>
#myChart {
    width: 100%;
    height: 554px;
}
#myChart2 {
    width: 100%;
    height: 347px;
}
#cookiePic {
    width: 100%;
    height: 347px;
}
.bg-grey {
    background: #DCDFE6;
}
.border-3 {
    border: 1px solid #ffffff;
    border-radius: 3px;
}
.border-5 {
    border: 1px solid #ffffff;
    border-radius: 5px;
}
.remark-text {
    color: #666666;
    font-size: 16px;
    font-weight: bold;
}
.value-text {
    color: #333333;
    font-size: 26px;
    font-weight: bold;
}
.notice-item {
    width: 550px;
    font-weight: bold;
    height: 20px;
    line-height:20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: break-all;
}
.w-100 {
    width: 100%;
}
</style>
