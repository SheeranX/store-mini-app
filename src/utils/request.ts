import Taro from "@tarojs/taro";
const host = 'http://localhost:30001'
const API = '/api'

type RequestMethod = 'get' | 'post' | 'put' | 'delete'

interface iOption {
    data: object,
    method: RequestMethod
}

const toUpperCaseMethod = (method: RequestMethod): 'GET' | 'POST' | 'PUT' | 'DELETE' => {
    return method.toUpperCase() as 'GET' | 'POST' | 'PUT' | 'DELETE';
}

// 添加请求拦截器
export default (url: string, options?: iOption) => {
    return new Promise((resolve, reject) => {
        const method = toUpperCaseMethod(options?.method || 'get');

        Taro.request({
            url: host + API + url,
            data: options?.data,
            method,
            success (res) {
                resolve(res)
            },
            fail (e) {
                reject(e)
            }
        })
    })
}
