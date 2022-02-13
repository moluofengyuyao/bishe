import axios from './http'

//天气预报
export function weather (city) {
    return axios.get(`/weather-api?version=v61&appid=75285986&appsecret=Iyr4MmmC&city=${city}&vue=1`)
}
//黄历代理
export function getHuang (num,number) {
    //需要时打开,每天100次
    return axios.get(`/getHuang-api/txapi/lunar/index?key=${num}&date=${number}`)
}
//天知道
export function tianzhidao (city) {
    return axios.get(`/tianzhidao-api/weather_mini?city=${city}`)
}
//景点代理
export function attraction (key,word) {
    //需要时打开,每天100次
    return axios.get(`/attraction-api/txapi/scenic/index?key=${key}&word=${word}`)
}
//旅游资讯代理
export function travelNew (key) {
    //需要时打开,每天100次
    return axios.get(`/travelNew-api/travel/index?key=${key}&&num=10`)
}
//新冠代理
export function XG (key) {
    return axios.get(`/XG-api/txapi/ncov/index?key=${key}`)
}

//账号登录
export function login (username,password) {
    let form = new FormData
    form.append("username", username)
    form.append("password", password)
    form.append("rememberMe", true)
    return axios.post(`/course-api/pcUser/login`,form)
}
//个人中心
export function userCenter() {
    return axios.get(`/course-api/pcUser/login-user/info`)
}

//退出登录

export function out() {
    return axios.get(`/course-api/pcUser/logout`)
}

//手机号登录
export function Phone (mobile,code) {
    let form = new FormData
    form.append("mobile", mobile)
    form.append("code", code)
    form.append("rememberMe", false)
    return axios.post(`/course-api/pcUser/login/mobile`,form)
}
//登录时发送手机验证码

export function getNum(mobile) {
    return axios.get(`/course-api/pcUser/login/send/code/${mobile}`)
}
