import req from '@/utils/request'

export const getBanner = () => {
    return req('/miniProduct/page/1/4', { method: 'post' })
}

export const getCellList = () => {
    return req('/miniSubCatalog/list/all')
}

export const getRecommand = (limit = 10) => {
    return req(`/miniProduct/page/1/${limit}`, { method: 'post' })
}
