import req from '@/utils/request'

export const getBanner = () => {
    return req('/miniProduct/page/1/4', { method: 'post' })
}
