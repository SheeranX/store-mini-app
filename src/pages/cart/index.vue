<template>
  <Navbar name="购物车" align="center"></Navbar>
  <view class="cart-wrapper">
    <div class="cart-wrapper--pay" v-if="list.length">
      <nut-checkbox v-model="checkAll">全选</nut-checkbox>
      <div class="cart-wrapper--pay--right">
        <span class="cart-wrapper--pay--right__total">总计: <span class="cart-wrapper--pay--right__total--num">111</span></span>
        <nut-button type="primary">结算: 共5件</nut-button>
      </div>
    </div>
    <template v-if="list.length">
      <cart-item v-for="(item, index) in list" :key="index" class="cart-wrapper-item" @sku-click="handleSkuClick"></cart-item>
    </template>
    <nut-empty description="购物车空空如也，快去选购吧～" v-else></nut-empty>
    <Recommand theme-title="猜你喜欢" direction="col" v-if="!list.length"></Recommand>
    <nut-sku
        v-model:visible="skuVisible"
        :sku="data.sku"
        :goods="data.goods"
        @selectSku="selectSku"
        @clickBtnOperate="clickBtnOperate"
        @close="close"
    ></nut-sku>
  </view>
</template>

<script>
import {computed, onMounted, reactive, ref, toRefs} from 'vue';
import CartItem from './widgets/cart-item.vue'
import DATA from "@/pages/cart/widgets/3x_data";
import Recommand from '@/components/common/recommand/recommand-container.vue'
import { useCart } from "@/hook/add-cart";
export default {
  name: 'cart',
  components: {
    Recommand,
    CartItem
  },
  setup() {
    const { cartList } = useCart()
    const list = computed(() => {
      return cartList.value
    })
    const checkAll = ref(false)
    const skuVisible = ref(false)
    const data = ref({
      sku: [],
      goods: {}
    })
    const close = () => {}
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
    const clickBtnOperate = (params) => {
      skuVisible.value = false
    }
    onMounted(() => {
      const { Sku, Goods, imagePathMap } = DATA
      data.value.sku = Sku
      data.value.goods = Goods
    })
    const handleClick = (type, msg, cover = false) => {
      // todo
    };
    const handleSkuClick = () => {
      skuVisible.value = true
    }
    return {
      handleClick,
      skuVisible,
      data,
      close,
      selectSku,
      clickBtnOperate,
      handleSkuClick,
      checkAll,
      list
    }
  }
}
</script>

<style lang="scss">
.cart-wrapper {
  padding-bottom: 80px;
  box-sizing: border-box;
  &-item {
    border-bottom: 1px solid #f3f3f3;
  }
  &--pay {
    position: fixed;
    bottom: 0;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    left: 0;
    right: 0;
    box-shadow: 0 -10px 30px rgb(0, 0, 0, 0.2);
    &--right {
      display: flex;
      align-items: center;
      column-gap: 20px;
      &__total {
        display: flex;
        align-items: center;
        column-gap: 10px;
        font-size: 28px;
        &--num {
          font-size: 40px;
          color: var(--nut-primary-color, #fa2c19);
        }
      }
    }
  }
  .nut-sku-content {
    box-sizing: border-box;
  }
}
</style>
