import { setState, getState } from '@/utils/store'
import { ref } from 'vue'
const KEY = 'CART'
type cartInfo = {
    productId: string,
    id: string,
    number: number,
    img: string,
    name: string,
    sku: string
}
export const useCart = () => {
    const cartList = ref(getState(KEY) || [])
    const add = (params: cartInfo, key:string = 'id') => {
        const item = cartList.value.find(i => params?.[key] === i?.[key])
        item ? item.number++ : cartList.value.push(params)
        setState(KEY, cartList.value)
    }
    const remove = id => {
        const index = cartList.value.findIndex(i => i.id === id)
        cartList.value.splice(index, 1)
        setState(KEY, cartList.value)
    }
    const update = (params: cartInfo, key:string = 'id') => {
        const item = cartList.value.find(i => params[key] === i[key])
        add(item)
    }
    const clear = () => {
        cartList.value = []
        setState(KEY, cartList.value)
    }
    return {
        add,
        remove,
        update,
        clear,
        cartList
    }
}
