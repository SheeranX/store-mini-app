<template>
  <Navbar align="center" :show-title="false" is-search @search="handleSearch"></Navbar>
  <div class="search-box">
    <div class="search-box--title">
      <div>历史搜索</div>
      <Del size="12px" color="#666"/>
    </div>
    <div class="search-box--content">
      <nut-tag round type="primary" color="#E9E9E9" text-color="#999999">大行</nut-tag>
      <nut-tag round type="primary" color="#E9E9E9" text-color="#999999">优贝</nut-tag>
      <nut-tag round type="primary" color="#E9E9E9" text-color="#999999">自行车</nut-tag>
    </div>
  </div>
</template>
<script setup>
import { Left, Search2, Del } from '@nutui/icons-vue-taro'
import router from '@/routes'
import {ref} from "vue";
const list = ref([{
  imgUrl: '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
  title: '【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
  price: '388',
  vipPrice: '378',
  shopDesc: '新品',
  delivery: '厂商配送',
  shopName: '阳澄湖大闸蟹自营店>'
}, {
  imgUrl: '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
  title: '【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
  price: '388',
  vipPrice: '378',
  shopDesc: '新品',
  delivery: '厂商配送',
  shopName: '阳澄湖大闸蟹自营店>'
}])
const handleSearch = (val) => {
  console.log(val)
  router.navigate('result')
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
const onChange = () => {}
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
