<template>
  <navbar name="商品详情" show-back :show-title="false"></navbar>
  <div class="product-details">
    <CustomSwipe :list="list" height="250px"></CustomSwipe>
    <div class="product-details--info">
      <div class="product-details--info__price">
        <nut-price :price="999" size="large" />
        <nut-price :price="1999" size="small" strike-through class="origin-price"/>
      </div>
      <h4 class="product-details--info__title">大行</h4>
      <div class="product-details--info__desc desc">
        商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描
      </div>
    </div>
    <div class="product-details--sku">
      <nut-cell-group>
        <nut-cell title="商品规格说明" is-link @click="handleSkuClick">
          <template #icon>
            <span class="txt-gray">已选</span>
          </template>
        </nut-cell>
        <nut-cell is-link @click="handleServiceClick">
          <template #icon>
            <span class="txt-gray">服务</span>
          </template>
          <template #title>
            <span>七天无理由退货·一年质保</span>
          </template>
        </nut-cell>
      </nut-cell-group>
      <!--服务说明-->
      <CustomPopover v-model:visible="serviceVisible" main-title="服务说明">
        <p>test</p>
        <p>test</p>
        <p>test</p>
      </CustomPopover>
      <!-- 规格选择-->
      <nut-sku
          v-model:visible="skuVisible"
          :sku="data.sku"
          :goods="data.goods"
          @selectSku="selectSku"
          @clickBtnOperate="clickBtnOperate"
          @close="close"
      ></nut-sku>
    </div>
    <nut-tabs v-model="tabValue" background="#fff">
      <nut-tab-pane title="图文介绍" pane-key="1"> Content 1 </nut-tab-pane>
      <nut-tab-pane title="产品参数" pane-key="2"> Content 2 </nut-tab-pane>
      <nut-tab-pane title="包装售后" pane-key="3"> Content 3 </nut-tab-pane>
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
import {onMounted, ref} from "vue";
import DATA from "@/pages/cart/widgets/3x_data";
import { useCart } from "@/hook/add-cart";
import BottomBar from '@/components/common/operate-bar/index.vue'
import toast from "@/utils/toast";

const list = ['https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg']
const serviceVisible = ref(false)
const skuVisible = ref(false)
const handleServiceClick = () => {
  serviceVisible.value = true
}
const tabValue = ref('1')
const handleSkuClick = () => {
  skuVisible.value = true
}
const data = ref({
  sku: [],
  goods: {}
})
const selectSku = (ss) => {
  const { sku, skuIndex, parentSku, parentIndex } = ss
  if (sku.disable) return false
  data.value.sku[parentIndex].list.forEach((s) => {
    s.active = s.id == sku.id
  })
  data.value.goods = {
    skuId: sku.id,
    price: '4599.00',
    imagePath: '//img14.360buyimg.com/n4/jfs/t1/215845/12/3788/221990/618a5c4dEc71cb4c7/7bd6eb8d17830991.jpg'
  }
}
const close = () => {}
const clickBtnOperate = (params) => {
  skuVisible.value = false
}
const handleAddCart = () => {
  const cart = useCart()
  cart.add({
    productId: '1-1',
    id: '1',
    number: 1,
    img: '/',
    name: '测试',
    sku: 'xl' })
  toast.success('添加成功')
}
const handlePurchase = () => {

}
onMounted(() => {
  const { Sku, Goods, imagePathMap } = DATA
  data.value.sku = Sku
  data.value.goods = Goods
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
