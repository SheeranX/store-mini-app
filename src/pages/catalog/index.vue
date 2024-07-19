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
import {host} from "@/utils/request";
import { getCatalogList, getSubCatalogList, findList } from "@/api";
const data = reactive({
  categoryInfo: {},
  category: [],
  categoryChild: []
})

const change = async (index) => {
  try {
    setRightPanel(data.category[index].catId)
  } catch (e) {
    console.log(e)
  }
}
const onChange = (val) => {
  router.navigate('result', { key: val.catId })
}
const setRightPanel = (catalogId) => {
  getSubCatalogList(catalogId).then(async res => {
    let promiseList = res.map(item => findList(item.subCatalogId))
    const _data = await Promise.all(promiseList)
    const list = res.map((item, index) => ({
      catId: item.subCatalogId,
      catName: item.name,
      catLevel: 2,
      catType: 1,
      childCateList: _data[index].map(item => ({
        backImg: host + item.logo,
        catId: item.brandId,
        catName: item.brandName,
        showPic: true,
        showVideo: false
      }))
    }))
    data.categoryChild = [...list]
  })
}
getCatalogList().then(res => {
  data.category = res.map(item => ({
    catId: item.catalogId,
    catName: item.name
  }))
  setRightPanel(res[0].catalogId)
})
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
