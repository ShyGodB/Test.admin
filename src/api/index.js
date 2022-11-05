import axios from 'axios'
import store from '../store'
import router from '../router'
import { Loading, Message } from 'element-ui'

const base_url = process.env.NODE_ENV === "development" ? '' : ''

// showLoading: 是否开启遮罩，默认为false，不开启
// showTip: 请求结束是否提示，默认为false，不提示
const post = async (url, data = {}, showTip = false, showLoading = false) => {
    let loading
    if (showLoading) {
        loading = Loading.service({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        })
    }
    return axios({
        method: 'POST',
        url: url.includes('http') ? url : base_url + '/api' + url,
        headers: {
            "Content-Type": 'application/json',
            "requestSource": "blife_admin_web"
        },
        data: data,
        timeout: 1000 * 300,
    }).then(res => {
        if (res.data.code === 401) {
            localStorage.removeItem("blifeAdminStore")
            store.state.userInfo = null
            router.push('/login')
        }
        if (showLoading) {
            loading.close()
        }
        if (showTip) {
            if (res.data.success) {
                Message.success(res.data.tips || '操作成功')
            } else {
                Message.error(res.data.msg || '操作失败')
            }
        }
        return res.data
    })
}

const get = async (url, params, showTip = false, showLoading = false) => {
    let loading
    if (showLoading) {
        loading = Loading.service({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        })
    }
    return axios({
        method: 'GET',
        url: url.includes('http') ? url : base_url + '/api' + url,
        headers: {
            "Content-Type": 'application/json',
        },
        params: params,
        timeout: 1000 * 300,
    }).then(res => {
        if (res.data.code === 401) {
            localStorage.removeItem("blifeAdminStore")
            store.state.userInfo = null
            router.push('/login')
        }
        if (showLoading) {
            loading.close()
        }
        if (showTip) {
            if (res.data.success) {
                Message.success(res.data.tips || '操作成功')
            } else {
                Message.error(res.data.msg || '操作失败')
            }
        }
        return res.data
    })
}

const uploadFile = async (url, data = {}, showTip = false, showLoading = false) => {
    let loading
    if (showLoading) {
        loading = Loading.service({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        })
    }
    return axios({
        method: 'POST',
        url: url.includes('http') ? url : base_url + '/api' + url,
        data: data,
        headers: {
            "Content-Type": 'multipart/form-data',
            "requestSource": "blife_admin_web"
        },
        timeout: 1000 * 300,
    }).then(res => {
        if (res.data.code === 401) {
            localStorage.removeItem("blifeAdminStore")
            store.state.userInfo = null
            router.push('/login')
        }
        if (showLoading) {
            loading.close()
        }
        if (showTip) {
            if (res.data.success) {
                Message.success(res.data.tips || '操作成功')
            } else {
                Message.error(res.data.msg || '操作失败')
            }
        }
        return res.data
    })
}

export default {
    post,
    get,
    uploadFile
}
