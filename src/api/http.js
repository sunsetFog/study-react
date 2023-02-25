// study: http请求
import axios from 'axios';
//配置axios拦截功能
const tid = localStorage.getItem('X-Token');

axios.default.defaults.baseURL = ''; // 接口地址
axios.default.defaults.timeout = 0; // 响应时间
axios.default.defaults.crossDomain = true; // axios.defaults.withCredentials = true // 是否允许设置cookie
axios.default.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'; // 配置POST请求头



axios.interceptors.request.use(function (config) {// 不报错函数
    config.headers['X-Token'] = tid || 'no-token';
    return config;
}, function (err) {// 报错函数
    return Promise.reject(err);
});


axios.interceptors.response.use(function (res) {// 不报错函数
    return res
}, function (err) {// 报错函数
    const { data: { err: errnum, error } } = (err || {}).response;
    if (errnum === 200 && error) {
        message.success(error);
    } else {
        message.error(error);
    }
    if (err.response.status === 401) {
        message.info('您的登录已过期，请重新登录');
        setTimeout(() => {
            history.replace('/login');
            localStorage.removeItem('tid');
            window.location.reload();
        }, 600);
    }
}
);

export default axios;