import Taro from '@tarojs/taro'

const toast = () => {
    const med = (type, title:string) => {
        Taro.showToast({ title, icon: type })
    }
    return {
        success (title) {
            med('success', title)
        },
        error (title) {
            med('error', title)
        },
        info (title) {
            med( 'none', title)
        }
    }
}

export default toast()
