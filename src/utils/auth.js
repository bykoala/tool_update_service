//获取token
export function getToken() {
    return localStorage.getItem('token')
}

//设置token
export  function setToken(token) {
    localStorage.setItem("token",token)
}

//判断是否已登录
export function isLogin() {
    if (localStorage.getItem("token")){
        return true
    }
    return false
}