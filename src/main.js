import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import echarts from 'echarts'
import Element from 'element-ui'
// import VueCropper from 'vue-cropper'
// import api from './api'
// import config from './util/config'
// import asyncTool from './util/asyncTool'
// import tool from './util/tool'
// import './registerServiceWorker'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import './assets/css/index.css'
// import VueAMap from 'vue-amap'
// import Xlsx from "@/components/Tools/Xlsx"
// import Content from "@/components/doc/Content"
// import Upload from "@/components/Upload"
// import HandUpload from "@/components/HandUpload"
// import HandImg from "@/components/HandImg"
// import format from "@/util/format"

Vue.use(Element)
// Vue.use(VueAMap)
// Vue.use(VueCropper)
// Date.prototype.format = function (args) {
//     return format.dateFormat(this, args)
// }
// Vue.prototype.$echarts = echarts
// Vue.prototype.$api = api
// Vue.prototype.$config = config
// Vue.prototype.$tool = tool
// Vue.prototype.$asyncTool = asyncTool
// Vue.component('doc-content', Content)
// Vue.component("o-xlsx", Xlsx)
// Vue.component("o-upload", Upload)
// Vue.component("o-hand-upload", HandUpload)
// Vue.component("o-handimg", HandImg)

// 设置不向控制台打印无意义的提示
Vue.config.productionTip = false
// 初始化vue-amap
// VueAMap.initAMapApiLoader(config.amap)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
