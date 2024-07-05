import req from '@/utils/request'

export const getBanner = () => {
    return req('/product/page/1/4', { method: 'post' })
}
