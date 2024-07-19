<template>
  <view class="recommand-wrapper">
    <view class="head-title" :class="{ center: direction === 'col' }">
      <view>{{themeTitle}}</view>
<!--      <view class="more" v-if="direction === 'row'">更多</view>-->
    </view>
    <view class="recommand-wrapper--content">
      <RecommandRow v-if="direction === 'row'" @item-click="handleClick" :data="list"></RecommandRow>
      <RecommandCol v-else @item-click="handleClick" :data="list"></RecommandCol>
    </view>
  </view>
</template>
<script setup>
import RecommandRow from './recommand-row.vue'
import RecommandCol from './recommand-col.vue'
defineProps({
  themeTitle: String,
  direction: {
    type: String,
    default: 'row'
  },
  list: {}
})
const emits = defineEmits(['item-click'])
const handleClick = (item) => {
  emits('item-click', item)
}
</script>
<style lang="scss">
@import './index.scss';
</style>
