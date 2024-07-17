<template>
  <view class="good-item">
    <image src="https://m.360buyimg.com/n2/jfs/t1/183517/38/7834/227702/60be1915Ed04664b0/eaf7536ab2c5f4b0.jpg" class="good-item--img"/>
    <view class="good-item--brand">
      <view class="good-item--brand__text">大行</view>
      <nut-tag type="danger" size="small">新品</nut-tag>
    </view>
    <view class="good-item--title">
      <view>这是一个商品</view>
    </view>
    <view class="good-item--price">
      <nut-price :price="199" size="normal" />
      <nut-price :price="8888" :decimal-digits="0" strike-through size="small"/>
    </view>
  </view>
</template>
<script setup>
defineProps({
  info: {
    type: Object,
    default: () => ({})
  }
})
</script>
