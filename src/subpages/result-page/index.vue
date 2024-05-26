<template>
  <Navbar align="center" :show-title="false" is-search @search="handleSearch"></Navbar>
  <div class="search-box--result">
    <nut-menu>
      <nut-menu-item v-model="val1" :options="options1" />
      <nut-menu-item v-model="val2" :options="options2" @change="onChange" />
    </nut-menu>
    <div class="search-box--result--card">
      <scroll-view>
        <nut-card
            :img-url="item.imgUrl"
            :title="item.title"
            :shop-desc="item.shopDesc"
            :vip-price="false"
            v-for="(item, index) in list"
        >
          <template #price>
            <nut-price :price="199" size="normal" />
            <nut-price :price="299" :decimal-digits="0" strike-through size="small" class="price-disable"/>
          </template>
          <template #prolist>
            <div class="card-tag-list">
              <span class="tag">活鲜</span>
              <span class="tag">礼盒</span>
              <span class="tag">国产</span>
            </div>
          </template>
        </nut-card>
      </scroll-view>
    </div>
  </div>
</template>
<script setup>
import {ref} from "vue";
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
const handleSearch = () => {}
</script>
<style lang="less">
.search-box--result {
  &--card {
    padding: 20px;
  }
  .nut-menu__bar {
    //box-shadow: none;
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
  .card-tag-list {
    margin: 3px 0 1px;
    height: 30px;
    overflow: hidden;
    .tag {
      float: left;
      padding: 0 5px;
      border-radius: 1px;
      font-size: 20px;
      height: 30px;
      line-height: 30px;
      color: #999;
      background-color: #f2f2f7;
      margin-right: 5px;
    }
  }
}
</style>
