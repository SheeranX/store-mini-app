<template>
  <Navbar align="center" :show-title="false" is-search @search="handleSearch"></Navbar>
  <div class="search-box">
    <div class="search-box--title">
      <div>历史搜索</div>
      <Del size="12px" color="#666" @click="handleDelete"/>
    </div>
    <div class="search-box--content">
      <nut-tag round type="primary" color="#E9E9E9" text-color="#999999" v-for="(item, index) in historyList" :key="index" @click="tabClick(item)">{{item}}</nut-tag>
    </div>
  </div>
</template>
<script setup>
import { Left, Search2, Del } from '@nutui/icons-vue-taro'
import router from '@/routes'
import {ref} from "vue";
import { useHistorySearch } from "@/hook/history-search";
const { historyList, add, clear } = useHistorySearch()
const handleSearch = (val) => {
  add(val)
  router.navigate('result', { key: val?.trim() })
}
const val1 = ref(0)
const val2 = ref('a')
const options1 = ref([
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活动商品', value: 2 }
])
const options2 = ref([
  { text: '默认排序', value: 'a' },
  { text: '好评排序', value: 'b' },
  { text: '销量排序', value: 'c' }
])
const handleDelete = () => {
  clear()
}
const tabClick = (item) => {
  router.navigate('result', { key: item?.trim() })
}
</script>
<style lang="scss">
.search-box {
  font-size: 28px;
  color: #333;
  display: flex;
  flex-direction: column;
  padding: 20px;
  row-gap: 20px;
  &--result {
    .nut-menu__bar {
      box-shadow: none;
    }
    .nut-card__right__price__origin {
      display: none;
    }
    .nut-card__left {
      width: 210px;
      height: 210px;
    }
    .price-disable {
      color: #999;
      margin-left: 10px;
    }
  }
  &--title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &--content {
    display: flex;
    column-gap: 10px;
    row-gap: 10px;
  }
}
</style>
