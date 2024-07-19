<template>
  <view class="good-item">
    <image :src="host + img" class="good-item--img" mode="aspectFit"/>
    <view class="good-item--brand">
      <view class="good-item--brand__text">{{info.brandName}}</view>
<!--      <nut-tag type="danger" size="small">新品</nut-tag>-->
    </view>
    <view class="good-item--title">
      <view>{{info.title}}</view>
    </view>
    <view class="good-item--price">
      <nut-price :price="info.price" size="normal" />
      <nut-price :price="originPrice" :decimal-digits="0" strike-through size="small"/>
    </view>
  </view>
</template>
<script setup>
import {computed} from "vue";
import {host} from "@/utils/request";

const props = defineProps({
  info: {
    type: Object,
    default: () => ({})
  }
})
const img = computed(() => {
  return props.info.imgUrls.split(',')?.[0]
})
const originPrice = computed(() => {
  return props.info.price * 1.2
})
</script>
