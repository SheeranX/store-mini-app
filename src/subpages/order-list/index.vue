<template>
  <Navbar name="我的订单" align="center" show-back :show-title="false" subPageTitle="我的订单"></Navbar>
  <div>
    <nut-searchbar v-model="val" @search="search" placeholder="搜索我的订单">
      <template #leftin>
        <Search2 color="#999"/>
      </template>
    </nut-searchbar>
    <div class="order-result">
      <nut-tabs v-model="value">
        <nut-tab-pane title="全部" pane-key="1"></nut-tab-pane>
        <nut-tab-pane title="待付款" pane-key="2"></nut-tab-pane>
        <nut-tab-pane title="待收货" pane-key="3"></nut-tab-pane>
        <nut-tab-pane title="已取消" pane-key="4"></nut-tab-pane>
      </nut-tabs>
      <div class="order-list-result">
        <CustomBlock v-for="item in 10" :key="item" @item-click="handleClick"></CustomBlock>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Search2 } from '@nutui/icons-vue-taro'
import CustomBlock from './widgets/block.vue'
import router from '@/routes'
import { ref } from 'vue'
const val = ref('')
const value = ref('1')
const search = () => {}
const handleClick = (item) => {
  router.navigate('order-details')
}
</script>
<style lang="scss">
.order-result {
  .nut-tab-pane {
    display: none;
  }
}
.order-list-result {
  &>div {
    border-bottom: 1px solid #ededed;
  }
}
</style>
