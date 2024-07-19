import Taro from "@tarojs/taro";
const API = '/api'
// export const host = 'http://localhost:30001'
export const host = 'https://www.ringsky.online'

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
            success ({ data }) {
                const { code, data: resData } = data
                if (code === 200) {
                    resolve(resData)
                } else {
                    reject()
                }
            },
            fail (e) {
                reject(e)
            }
        })
    })
}
