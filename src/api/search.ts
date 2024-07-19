import req from '@/utils/request'

export const search = (key) => {
    return req('/miniProduct/search', { method: 'get', data: { key } })
}

export const getDetail = (id) => {
    return req('/miniProduct/findById', { method: 'get', data: { id } })
}

export const getHotList = () => {
    return req('/miniProduct/hotList', { method: 'get' })
}

export const getNewList = () => {
    return req('/miniProduct/newList', { method: 'get' })
}

export const getDiscountList = () => {
    return req('/miniProduct/discountList', { method: 'get' })
}
