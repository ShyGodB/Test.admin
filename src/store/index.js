/*
 * @Author: qbfang
 * @Date: 2022-11-1 14:23:10
 * @LastEditTime: 2020-06-21 03:14:26
 * @LastEditors: Please set LastEditors
 * @Description: vuex配置主页，只存放state
 * @FilePath: \edtuina.admin\src\store\index.js
 */ 
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const state = {
    sidebarBGC: '#000000',
    orderId: '',
    userInfo: false,
    isCollapse: true,
    userId: null,
    techId: null,
    content: '',
    noticeId: null,
    questionId: null,
    introduce: null,
    notice: null,
    taboo: null,
    menus: null,
    times: null,
    time: '',
    proxyCode: 0,
    couponStoreId: 0,
    inviteId: 0,
    allMch: [],
    allStore: [],
    salerId: null,
    dynamicId: null,
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})