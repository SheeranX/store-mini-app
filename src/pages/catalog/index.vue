<template>
  <Navbar name="分类" align="center"></Navbar>
  <view class="catalog-page">
    <nut-category :category="data.category" @change="change">
      <nut-category-pane :categoryChild="data.categoryChild" @onChange="onChange"></nut-category-pane>
    </nut-category>
  </view>
</template>

<script setup>
import { reactive } from 'vue';
import staticData from './categoryData'
import Navbar from "@/components/common/navbar.vue";
import router from '@/routes'
const data = reactive({
  categoryInfo: staticData.categoryInfo,
  category: staticData.categoryInfo.category,
  categoryChild: staticData.categoryChild
})

const change = (index) => {
  try {
    data.categoryChild = [].concat(data.categoryInfo.category[index + 1].children)
  } catch (e) {
    console.log(e)
  }
}
const onChange = (val) => {
  console.log(val)
  router.navigate('result')
}
</script>

<style lang="scss">
.catalog-page {
  height: 100vh;
  .nut-category-pane {
    height: 100vh;
    overflow: auto;
  }
}
</style>
