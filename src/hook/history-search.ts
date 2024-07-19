import { setState, getState } from '@/utils/store'
import { ref } from 'vue'
const KEY = 'HISTORY-SEARCH'
export const useHistorySearch = () => {
    const historyList = ref(getState(KEY) || [])
    const add = (name) => {
        const item = historyList.value.find(i => name == i)
        !item && historyList.value.push(name)
        if (historyList.value?.length > 10) {
            historyList.value.pop()
            historyList.value.unshift(name)
        }
        setState(KEY, historyList.value)
    }
    const clear = () => {
        historyList.value = []
        setState(KEY, historyList.value)
    }
    return {
        add,
        clear,
        historyList
    }
}
