import Taro from "@tarojs/taro";

export const setStorage = (key, value) => {
    let data = value
    if (typeof data === 'object') {
        data = JSON.stringify(data)
    }
    Taro.setStorageSync(key, data)
}

export const getStorage = (key) => {
    let value = Taro.getStorageSync(key)
    try {
        value = JSON.parse(value)
    } catch (e) {
        // exception
    }
    return value
}

export const removeStorage = (key) => {
   try {
       Taro.removeStorageSync(key)
   } catch (e) {
       console.log(e)
   }
}
