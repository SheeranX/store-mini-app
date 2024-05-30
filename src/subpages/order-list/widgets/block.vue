<template>
  <div class="block-box">
    <img class="block-box-img" src="/" @click="handleClick"/>
    <div class="block-box-content">
      <div class="block-box-content--top">
        <div class="block-box-content--top__title" @click="handleClick">大行</div>
        <div class="block-box-content--top__status">
          <span class="block-box-content--top__status--text">完成</span>
          <Del2/>
        </div>
      </div>
      <div class="block-box-content--desc" @click="handleClick">描述描述描述</div>
      <div class="block-box-content--num">x3</div>
      <div class="block-box-content--bottom">
        <h4 class="block-box-content--total">实付款: <nut-price>999</nut-price></h4>
        <nut-button type="primary" @click.prevent="orderBuy">再次购买</nut-button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Del2 } from "@nutui/icons-vue-taro";
import router from '@/routes'
const props = defineProps({
  info: {
    type: Object,
    default: () => ({})
  }
})
const orderBuy = (e) => {
  router.navigate('order-buy')
  e.preventDefault()
  return
}
const emits = defineEmits(['item-click'])
const handleClick = () => {
  emits('item-click', props.info)
}
</script>
<style lang="scss">
.block-box {
  display: flex;
  box-sizing: border-box;
  padding: 20px;
  &-img {
    width: 200px;
    box-sizing: border-box;
    height: 200px;
  }
  &-content {
    flex: 1;
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    &--bottom {
      display: flex;
      column-gap: 20px;
      align-items: center;
      justify-content: flex-end;
    }
    &--desc {
      color: #999999;
      font-size: 28px;
    }
    &--num {
      color: #999999;
      font-size: 28px;
    }
    &--top {
      display: flex;
      justify-content: space-between;
      &__title {
        font-size: 30px;
        font-weight: 500;
      }
      &__status {
        font-size: 28px;
        display: inline-flex;
        align-items: center;
        column-gap: 10px;
        color: var(--nut-text-color, #666);
        &--text {
          position: relative;
          display: inline-block;
          &:after {
            content: '';
            display: inline-block;
            height: 80%;
            width: 3px;
            background: var(--nut-text-color, #999);
            right: -8px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
    }
  }
}
</style>
