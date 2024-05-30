<template>
  <div class="operate-bar">
    <div class="operate-bar--icon">
      <div class="operate-bar--icon__item" @click="backHome">
        <Home color="#ff6034" size="18px"/>
        <p class="operate-bar--icon__text">首页</p>
      </div>
      <div class="operate-bar--icon__item">
        <Message color="#ff6034" size="18px"/>
        <p class="operate-bar--icon__text">客服</p>
      </div>
    </div>
    <div class="operate-bar--button">
      <nut-button shape="square" plain type="primary">
        <template #icon>
          <Cart2 />
        </template>
        加入购物车
      </nut-button>
      <nut-button shape="square" type="primary" color="linear-gradient(to right, #ff6034, #ee0a24)" @click="handlePurchase">
        <template #icon>
          <Uploader />
        </template>
        立即购买
      </nut-button>
    </div>
  </div>
</template>
<script setup>
import { Home, Cart2,  Uploader, Message } from "@nutui/icons-vue-taro";
import router from '@/routes/index'
const backHome = () => {
  router.navigate('home')
}
const emits = defineEmits(['purchase'])
const handlePurchase = () => {
  emits('purchase')
}
</script>
<style lang="less">
.operate-bar {
  background: #fff;
  position: fixed;
  bottom: 0;
  padding: 20px 20px 40px;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  &--icon {
    display: flex;
    align-items: center;
    column-gap: 40px;
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
