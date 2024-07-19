<template>
  <navbar name="商品详情" show-back :show-title="false"></navbar>
  <div class="product-details">
    <CustomSwipe :list="list" height="250px"></CustomSwipe>
    <div class="product-details--info">
      <div class="product-details--info__price">
        <nut-price :price="info.price" size="large" />
        <nut-price :price="info.price * 1.2" size="small" strike-through class="origin-price"/>
      </div>
      <h4 class="product-details--info__title">{{info.title}}({{info.productId}})</h4>
      <div class="product-details--info__desc desc">
        {{info.desc}}
      </div>
    </div>
    <div class="product-details--sku">
      <nut-cell-group>
        <nut-cell :title="data.goods.skuName || '商品规格说明'" is-link @click="handleSkuClick">
          <template #icon>
            <span class="txt-gray">{{data.goods.skuName ? '已选' : '选择'}}</span>
          </template>
        </nut-cell>
        <nut-cell is-link @click="handleServiceClick">
          <template #icon>
            <span class="txt-gray">服务</span>
          </template>
          <template #title>
            <span>售后保障</span>
          </template>
        </nut-cell>
      </nut-cell-group>
      <!--服务说明-->
      <CustomPopover v-model:visible="serviceVisible" main-title="服务说明">
        <image :src="host+'/upload/service-0.jpg'" class="img-column--item" mode="widthFix"></image>
        <image :src="host+'/upload/service-1.jpg'" class="img-column--item" mode="widthFix"></image>
      </CustomPopover>
      <!-- 规格选择-->
      <nut-sku
          v-if="data.sku.length"
          v-model:visible="skuVisible"
          :sku="data.sku"
          :goods="data.goods"
          @selectSku="selectSku"
          @clickBtnOperate="clickBtnOperate"
          @close="close"
      ></nut-sku>
    </div>
    <nut-tabs v-model="tabValue" background="#fff">
      <nut-tab-pane title="图文介绍" pane-key="1">
        <div class="img-column">
          <image class="img-column--item" :src="item.url" v-for="(item, index) in detailList" :key="index" mode="widthFix"></image>
        </div>
      </nut-tab-pane>
      <nut-tab-pane title="产品参数" pane-key="2">
        <div class="img-column">
          <image class="img-column--item" :src="item.url" v-for="(item, index) in refList" :key="index" mode="widthFix"></image>
        </div>
      </nut-tab-pane>
      <nut-tab-pane title="包装售后" pane-key="3">
        <image :src="host+'/upload/service.jpg'" class="img-column--item" mode="widthFix"></image>
      </nut-tab-pane>
    </nut-tabs>
    <div class="product-details--bottom">
      <bottom-bar @purchase="handlePurchase" @addCart="handleAddCart"></bottom-bar>
    </div>
  </div>
</template>
<script setup>
import Navbar from '@/components/common/navbar.vue'
import CustomSwipe from "@/components/common/custom-swipe.vue";
import CustomPopover from "@/components/common/custom-popover.vue";
import {onMounted, reactive, ref} from "vue";
import { useCart } from "@/hook/add-cart";
import BottomBar from '@/components/common/operate-bar/index.vue'
import toast from "@/utils/toast.ts";
import router from '@/routes'
import { getDetail } from "@/api";
import { host } from "@/utils/request";

const list = ref([])
const detailList = ref([])
const refList = ref([])
const info = ref({})
const serviceVisible = ref(false)
const skuVisible = ref(false)
const cart = useCart()
const handleServiceClick = () => {
  serviceVisible.value = true
}

const tabValue = ref('1')
const handleSkuClick = () => {
  skuVisible.value = true
  data.value.goods = setGoods()
}
const data = ref({
  sku: [],
  goods: {}
})
const selectSku = (ss) => {
  console.log(ss)
  const { sku, skuIndex, parentSku, parentIndex } = ss
  if (sku.disable) return false
  data.value.sku[parentIndex].list.forEach((s) => {
    s.active = s.id == sku.id
  })
  data.value.goods = {
    skuId: info.value.productId,
    price: info.value.price,
    imagePath: info.value.imgUrls[0].url,
    skuName: sku.name
  }
}
const close = () => {}
const clickBtnOperate = (params) => {
  skuVisible.value = false
  console.log(params, 'param')
  info.value.number = params.value
}
const handleAddCart = () => {
  if (!data.value.goods.skuName) {
    toast.error('请选择商品规格')
    return
  }
  cart.add({
    ...info.value,
    sku: data.value.goods.skuName })
  toast.success('添加成功')
}
const handlePurchase = () => {
 // todo
}
const setSku = (skuData) => {
  skuData = JSON.parse(skuData)
  const sku = skuData.reduce((arr, cur, index) => {
    const obj = {
      id: info.value.productId,
      name: cur.productSku,
      list: cur.productSkuItem.split(',').map((item, idx) => ({
        name: item,
        id: `${index}-${idx}`,
        active: false,
        disabled: false
      }))
    }
    arr.push(obj)
    return arr
  }, [])
  data.value.sku = sku
}
const setImg = (url) => {
  return host + url
}
const setList = (data, key) => {
  data[key] = data[key].split(',').map((item, index) => ({ url: setImg(item), value: index }))
  return  data[key]
}
const setGoods = () => {
  return reactive({
    skuId: info.value.productId,
    price: info.value.price,
    imagePath: info.value.imgUrls[0].url
  })
}
onMounted(() => {
  const route = router.route()
  getDetail(route.params.id).then(res => {
    list.value = setList(res, 'imgUrls')
    detailList.value = setList(res, 'details')
    refList.value = setList(res, 'ref')
    info.value = res
    setSku(res.productSkuIds)
    data.value.goods = setGoods()
    console.log(data.value.goods, 'goods')
  })
})
</script>
<style lang="scss">
.product-details {
  position: absolute;
  top: 0;
  background: #efefef;
  z-index: -1;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  .origin-price {
    color: #666666;
    margin-left: 10px;
  }
  .img-column {
    display: flex;
    flex-direction: column;
    &--item {
      width: 100%;
      height: auto;
    }
  }
  &--bottom {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0 20px;
    background: #fff;
  }
  &--sku {
    .txt-gray {
      margin-right: 10px;
    }
  }
  &--info {
    padding: 10px 20px;
    background: #fff;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    &__price {
      //
    }
    &__title {
      font-size: 30px;
      font-weight: 500;
      color: #333;
    }
  }
}
</style>
