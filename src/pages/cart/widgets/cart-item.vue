<template>
  <nut-swipe>
    <div class="cart-item-box">
      <nut-checkbox label="1" v-model="checked"></nut-checkbox>
      <div class="cart-item-box--content">
        <img src="https://m.360buyimg.com/n2/jfs/t1/109937/34/10781/169393/5e81b698Ede55aa35/62f6c77ce58c8866.jpg" class="cart-item-box--content__img"/>
        <div class="cart-item-box--container">
          <h4 class="cart-item-box--title">大行</h4>
          <div class="cart-item-box--desc">
            【大行折叠自行车】p8禧玛诺套件折叠自行车
          </div>
          <div class="cart-item-box--sku" @click="handleSku">
            <div class="cart-item-box--sku__text"><nut-ellipsis direction="end" content="墨绿/20速,17寸身高125cm,17寸身高125cm" rows="1"></nut-ellipsis></div>
            <IconFont name="down-arrow" color="#999999" size="14px"></IconFont>
          </div>
          <div class="cart-item-box-bottom">
            <div class="cart-item-box-bottom__price">
              <nut-price :price="199" size="normal" />
            </div>
            <nut-input-number v-model="number" min="0"/>
          </div>
        </div>
      </div>
    </div>
    <template #right>
      <nut-button shape="square" style="height: 100%" type="danger">删除</nut-button>
    </template>
  </nut-swipe>
</template>
<script setup>
import { IconFont } from '@nutui/icons-vue-taro'
import { ref } from "vue"
const emits = defineEmits(['sku-click'])
const number = ref(0)
const checked = ref(false)
const data = ref({
  sku: [],
  goods: {}
})
const handleSku = (id) => {
  emits('sku-click', id)
}
</script>
<style lang="scss">
.cart-item-box {
  display: flex;
  padding: 10px 20px;
  font-size: 28px;
  color: #333;
  .nut-checkbox {
    margin-right: 10px;
  }
  &--sku {
    position: relative;
    width: 100%;
    background: #eee;
    padding: 5px 10px;
    border-radius: 5px;
    color: #666;
    font-size: 24px;
    display: flex;
    column-gap: 10px;
    box-sizing: border-box;
    align-items: center;
    &:after {
      content: '';
      height: 1px;
      width: 90%;
      position: absolute;
      left: 0;
      transform: translateX(-50%);
    }
  }
  &--title {
    font-weight: 500;
  }
  &--desc {
    font-size: 24px;
    color: #666;
  }
  &--container {
    flex: 1;
    row-gap: 10px;
    display: flex;
    flex-direction: column;
  }
  &--content {
    flex: 1;
    display: flex;
    column-gap: 10px;
    &__img {
      width: 200px;
      height: 200px;
    }
  }
  &-bottom {
    display: flex;
    align-items: center;
    column-gap: 10px;
    justify-content: space-between;
  }
}
</style>
