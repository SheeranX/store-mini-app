<template>
  <Navbar name="购物车" align="center"></Navbar>
  <view class="cart-wrapper">
    <template v-if="list.length">
      <cart-item v-for="(item, index) in list" :key="index" class="cart-wrapper-item" @sku-click="handleSkuClick"></cart-item>
    </template>
    <nut-empty description="购物车空空如也，快去选购吧～" v-else></nut-empty>
    <Recommand theme-title="猜你喜欢" direction="col"></Recommand>
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
import {onMounted, reactive, ref, toRefs} from 'vue';
import CartItem from './widgets/cart-item.vue'
import DATA from "@/pages/cart/widgets/3x_data";
import Recommand from '@/components/common/recommand/container.vue'

export default {
  name: 'cart',
  components: {
    Recommand,
    CartItem
  },
  setup() {
    const state = reactive({
      list: []
    });
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
      state.show = true;
      state.msg2 = msg;
      state.type = type;
      state.cover = cover;
    };
    const handleSkuClick = () => {
      skuVisible.value = true
    }
    return {
      ...toRefs(state),
      handleClick,
      skuVisible,
      data,
      close,
      selectSku,
      clickBtnOperate,
      handleSkuClick
    }
  }
}
</script>

<style lang="scss">
.cart-wrapper {
  &-item {
    border-bottom: 1px solid #f3f3f3;
  }
  .nut-sku-content {
    box-sizing: border-box;
  }
}
</style>
