import { reactive } from 'vue'
import { setStorage, getStorage, removeStorage } from './storage'
import { isEmpty } from './util'
const __APP_STATE = reactive({})

export const setState = (key, value) => {
    __APP_STATE[key] = value
    setStorage(key, value)
}

export const getState = (key) => {
    let value = __APP_STATE[key]
    if (isEmpty(value)) {
        value = getStorage(key)
    }
    return value
}

export const removeState = key => {
    delete __APP_STATE[key]
    removeStorage(key)
}
