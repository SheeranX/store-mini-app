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
        <CustomSwipe :list="list"></CustomSwipe>
      </view>
      <view class="home-page-content-grid">
        <GridCell :list="gridList"></GridCell>
      </view>
      <Recommand theme-title="热门推荐" @item-click="handleItemClick"></Recommand>
      <Recommand theme-title="新品上架" @item-click="handleItemClick"></Recommand>
      <Recommand theme-title="特价专区" @item-click="handleItemClick"></Recommand>
    </view>
  </view>
</template>

<script>
import { reactive, toRefs } from 'vue';
import Navbar from '@/components/common/navbar.vue'
import { Search } from '@nutui/icons-vue-taro'
import CustomSwipe from './widgets/custom-swipe.vue'
import GridCell from './widgets/gird-cell.vue'
import Recommand from '@/components/common/recommand/recommand-container.vue'
import router from '@/routes'
import {getBanner} from "@/api";
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
      list: ['https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
        'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
        'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
        'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'],
      gridList: [
          'https://m.360buyimg.com/n2/jfs/t1/183517/38/7834/227702/60be1915Ed04664b0/eaf7536ab2c5f4b0.jpg',
          'https://m.360buyimg.com/n2/jfs/t1/206917/11/8226/66945/6184e893E5d49b030/9fa0ff3ea1c0f225.jpg',
          'https://m.360buyimg.com/n2/jfs/t1/23018/23/4644/40085/5c330e8aEb906ed16/94f3022b373bf991.jpg',
          'https://m.360buyimg.com/n2/jfs/t1/35828/26/5078/324781/5cbea100Eb22bb637/4d2d5e3bcd86fba4.jpg',
          'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
          'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
          'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
          'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
      ]
    });
    const handleClick = () => {
      console.log('click')
      router.navigate('search')
    };

    const handleItemClick = (item) => {
      console.log(item)
      router.navigate('product-details')
    }
    getBanner().then(res => {
      console.log(res, 'res')
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
