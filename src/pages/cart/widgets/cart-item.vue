<template>
  <nut-swipe :disabled="isOrder">
    <div class="cart-item-box">
      <nut-checkbox v-model="model.checked" v-if="!isOrder" @change="handleChecked"></nut-checkbox>
      <div class="cart-item-box--content">
        <image :src="model?.imgUrls[0]?.url" class="cart-item-box--content__img"/>
        <div class="cart-item-box--container">
          <h4 class="cart-item-box--title">{{model.title}}</h4>
          <div class="cart-item-box--desc">
            {{model.desc}}
          </div>
          <div class="cart-item-box--sku" @click="handleSku">
            <div class="cart-item-box--sku__text"><nut-ellipsis direction="end" :content="model.sku" :rows="isOrder ? 2: 1"></nut-ellipsis></div>
            <IconFont name="down-arrow" color="#999999" size="14px" v-if="!isOrder"></IconFont>
          </div>
          <div class="cart-item-box-bottom">
            <div class="cart-item-box-bottom__price">
              <nut-price :price="model.price" size="normal" />
            </div>
            <nut-input-number v-model="model.number" min="0" @change="handleChangeNumber"/>
          </div>
        </div>
      </div>
    </div>
    <template #right>
      <nut-button shape="square" style="height: 100%" type="danger" @click="handleDelete">删除</nut-button>
    </template>
  </nut-swipe>
</template>
<script setup>
import { IconFont } from '@nutui/icons-vue-taro'
import {ref, toRef, toRefs, watch} from "vue"
const emits = defineEmits(['sku-click', 'item-delete', 'onUpdate:checked', 'onUpdate:number'])
const props = defineProps({
  isOrder: Boolean,
  info: {
    type: Object,
    default: () => ({})
  }
})
const model = ref(props.info)
const data = ref({
  sku: [],
  goods: {}
})
watch(() => props.info, (val) => {
  model.value = val
  console.log(val, 'val')
}, {
  deep: true
})
const handleSku = (id) => {
  emits('sku-click', id)
}
const handleDelete = () => {
  emits('item-delete', props.info)
}
const handleChecked = () => {
  emits('onUpdate:info', model.value)
}
const handleChangeNumber = () => {
  emits('onUpdate:info', model.value)
}
</script>
<style lang="scss">
.cart-item-box {
  display: flex;
  padding: 10px 20px;
  overflow: hidden;
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
