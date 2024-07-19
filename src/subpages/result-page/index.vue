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
            :shop-desc="item.desc"
            :vip-price="false"
            v-for="(item, index) in list"
            @click="handleClick(item)"
        >
          <template #price>
            <nut-price :price="item.price" size="normal" />
            <nut-price :price="item.originPrice" :decimal-digits="0" strike-through size="small" class="price-disable"/>
          </template>
<!--          <template #prolist>-->
<!--            <div class="card-tag-list">-->
<!--              <span class="tag">活鲜</span>-->
<!--              <span class="tag">礼盒</span>-->
<!--              <span class="tag">国产</span>-->
<!--            </div>-->
<!--          </template>-->
        </nut-card>
      </scroll-view>
    </div>
  </div>
</template>
<script setup>
import {onMounted, ref} from "vue";
import router from '@/routes'
import { search } from "@/api";
import {host} from "@/utils/request";

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
const list = ref([])
const handleSearch = (val) => {
  getResult(val)
}
const handleClick = (item) => {
  router.navigate('product-details', { id: item.id })
}
const getResult = (key) => {
  console.log(key)
  search(key).then(res => {
    list.value = res.map(item => ({ ...item, originPrice: item.price * 1.2, imgUrl:host + item.imgUrls.split(',')[0] }))
  })
}
onMounted(() => {
  const route = router.route()
  getResult(decodeURI(route.params.key))
})
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
