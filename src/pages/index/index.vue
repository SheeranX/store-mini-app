<template>
  <view class="home-page">
    <view class="banner"></view>
    <Navbar name="婴幼儿品牌馆"></Navbar>
    <view class="home-page-content">
      <nut-searchbar v-model="search" @click-input="handleClick" :disabled="true" background="none">
        <template #rightin>
          <Search></Search>
        </template>
      </nut-searchbar>
      <view class="home-page-content-swipe">
        <CustomSwipe :list="list" v-if="list.length"></CustomSwipe>
      </view>
      <view class="home-page-content-grid">
        <GridCell :list="gridList"></GridCell>
      </view>
      <Recommand theme-title="热门推荐" @item-click="handleItemClick" :list="recommandList" v-if="recommandList.length"></Recommand>
      <Recommand theme-title="新品上架" @item-click="handleItemClick" :list="newList" v-if="newList.length"></Recommand>
      <Recommand theme-title="特价专区" @item-click="handleItemClick" :list="saleList" v-if="saleList.length"></Recommand>
    </view>
  </view>
</template>

<script>
import { reactive, toRefs } from 'vue';
import Navbar from '@/components/common/navbar.vue'
import { Search } from '@nutui/icons-vue-taro'
import CustomSwipe from "@/components/common/custom-swipe";
import GridCell from './widgets/gird-cell.vue'
import Recommand from '@/components/common/recommand/recommand-container.vue'
import router from '@/routes'
import { getBanner, getCellList, getRecommand, getHotList, getNewList, getDiscountList } from "@/api";
import { host } from '@/utils/request'
export default {
  name: 'Home',
  components: {
    Navbar,
    Search,
    CustomSwipe,
    GridCell,
    Recommand
  },
  setup() {
    const state = reactive({
      search: '',
      list: [],
      gridList: [],
      recommandList: [],
      newList: [],
      saleList: []
    });
    const handleClick = () => {
      router.navigate('search')
    };

    const handleItemClick = (item) => {
      router.navigate('product-details', { id: item.id })
    }
    getBanner().then(({ list: _list }) => {
      state.list = _list.map(item => ({ url: host + item.imgUrls.split(',')[0], value: item.id }))
    })
    getCellList().then(res => {
      state.gridList = res.map(item => ({ url: host + item.imgUrl, ...item }))
    })
    getHotList().then((list) => {
      state.recommandList = list
    })
    getNewList().then((list) => {
      state.newList = list
    })
    getDiscountList().then((list) => {
      state.saleList = list
    })
    return {
      ...toRefs(state),
      handleClick,
      handleItemClick
    }
  }
}
</script>

<style lang="scss">
.home-page {
  position: relative;
  &-content-swipe {
    padding: 0 32px;
    border-radius: 8px;
    overflow: hidden;
    background: #fff;
    .nut-swiper {
      border-radius: 8px;
    }
  }
  &-content-grid {
    margin: 20px 32px;
    box-sizing: border-box;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
    border-radius: 10px;
    overflow: hidden;
  }
}
</style>
