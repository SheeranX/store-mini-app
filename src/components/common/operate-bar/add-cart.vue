<template>
  <div class="cart-operate-bar">
    <div class="cart-operate-bar--icon">
      <div class="cart-operate-bar--icon__item" @click="backHome">
        <Home color="#ff6034" size="18px"/>
        <p class="cart-operate-bar--icon__text">首页</p>
      </div>
      <div class="cart-operate-bar--icon__item">
        <Message color="#ff6034" size="18px"/>
        <p class="cart-operate-bar--icon__text">客服</p>
      </div>
      <div class="cart-operate-bar--icon__item" @click="goCart">
        <Cart color="#ff6034" size="18px"/>
        <p class="cart-operate-bar--icon__text">购物车</p>
      </div>
    </div>
    <div class="cart-operate-bar--button">
      <nut-button shape="square" plain type="primary" @click="handleAddCart">
        加入购物车
      </nut-button>
      <nut-button shape="square" type="primary" color="linear-gradient(to right, #ff6034, #ee0a24)" @click="handlePurchase">
        立即购买
      </nut-button>
    </div>
  </div>
</template>
<script setup>
import { Home, Cart, Message } from "@nutui/icons-vue-taro";
import router from '@/routes/index'
const backHome = () => {
  router.navigate('home')
}
const goCart = () => {
  router.navigate('cart')
}
const emits = defineEmits(['purchase', 'addCart'])
const handlePurchase = () => {
  emits('purchase')
}
const handleAddCart = () => {
  emits('addCart')
}
</script>
<style lang="less">
.cart-operate-bar {
  background: #fff;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
  padding: 20px 0px 40px;
  display: flex;
  justify-content: space-between;
  &--icon {
    display: flex;
    align-items: center;
    column-gap: 30px;
    &__item {
      text-align: center;
    }
    &__text {
      color: #666666;
      font-size: 24px;
    }
  }
}
</style>
