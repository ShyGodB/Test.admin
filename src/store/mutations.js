export default {
    negatIsCollapse (state) {
        state.isCollapse = !state.isCollapse
    },
    loginOut (state) {
        state.userInfo = null
    }
}