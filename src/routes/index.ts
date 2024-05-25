import Taro from "@tarojs/taro";
const { getRoutes, getAllRoute } = require('./route')
import qs from 'qs'

console.log(getRoutes())
type Route = {
    name: string,
    path: string,
    isTab: boolean
}
export const getQuery = (params: object = {}) => {
    return qs.stringify(params)
}

const navigate = (name:string, params:object) => {
    const _routes = getAllRoute()
    const route = _routes.find(obj => obj.name === name) as Route
    if (route.isTab) {
        // 跳转tab
        Taro.switchTab({
            url: '/' + route.path
        })
    } else {
        // 拼参数
        const paramsString = getQuery(params)
        Taro.navigateTo({
            url: '/' + (paramsString ? route.path + '?' + paramsString : route.path)
        })
    }
}
const back = (delta:number = 1) => {
    Taro.navigateBack({
        delta
    })
}

export default {
    navigate,
    back,
    getRoutes
}
