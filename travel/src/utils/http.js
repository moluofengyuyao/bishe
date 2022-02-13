
//全局封装axios
import axios from 'axios'

// 创建实例，可以给一些参数
const instance = axios.create({
    baseURL: '',
    timeout: 10000,
    // headers: {'X-Custom-Header': 'foobar'}
});

// 添加请求拦截器
instance.interceptors.request.use(function (request) {
    // 在发送请求之前做些什么
    return request;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {

    // console.log(response)
    // 对响应数据做点什么
    if (response.status === 200) {
        return response
    }
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});



export default instance
