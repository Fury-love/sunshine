
import axios from 'axios'
import urls from "@/api/urls"

// axios 配置
axios.defaults.timeout = 10000;
axios.defaults.headers.post["Content-Type"] = "application/json";
// 配置程序基础路径
axios.defaults.baseURL =process.env.NODE_ENV !== 'production' && process.env.OPEN_PROXY ? '/sunshine/' : urls.baseUrl

//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {

    //在发送请求之前做某件事
    return config;
}, (error) => {
    return Promise.reject(error);
});
//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
    return res;
}, (error) => {
    return Promise.reject(error);
});

//返回一个Promise(发送post请求)
function fetch(url, params, method, isJSON) {
    // 如果没有网络
    if (!navigator.onLine) {
        return;
    }
    return new Promise((resolve, reject) => {
        axios[method](url, params)
            .then(response => {
                let res = response.data;
                console.log('res',res);
                if (typeof res == "string")
                    return resolve("");
                // 根据全局的报文规范、统一返回报文需要的主题内容
                if (res.status === 200) {
                    if (typeof res.total != 'undefined') {
                        if (!res.data) {
                            res.data = []
                        }
                    }
                    resolve(res.data);
                } else {
                    reject(res.message)
                    if (res.message == 'invalidSession') {
                        return
                    }
                }
            }, err => {
                reject('网络连接失败，请稍后重试')
            })
            .catch((error) => {
                reject('网络连接失败，请稍后重试')
            })
    })
}
const http = {
    put:(requestUrl, params) => {
        return fetch(requestUrl, params, "put")
    },
    post:(requestUrl, params) => {
        return fetch(requestUrl, params, "post")
    },
    get:(requestUrl, params) => {
        return fetch(requestUrl, params, "get")
    },
    del:(requestUrl, params) => {
        return fetch(requestUrl, params, "delete")
    },
}

export default http;