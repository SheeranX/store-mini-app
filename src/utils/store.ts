import { reactive } from 'vue'
import { setStorage, getStorage, removeStorage } from './storage'
import { isEmpty } from './util'
const __APP_STATE = reactive({})

export const setState = (key:string, value:any) => {
    __APP_STATE[key] = value
    setStorage(key, value)
}

export const getState = (key:string) => {
    let value = __APP_STATE[key]
    if (isEmpty(value)) {
        value = getStorage(key)
    }
    return value
}

export const removeState = (key:string) => {
    delete __APP_STATE[key]
    removeStorage(key)
}
