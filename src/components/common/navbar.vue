<template>
  <view class="navbar-wrapper" :style="style">
    <view class="navbar-title" v-if="showTitle" :class="{ center: align === 'center' }">{{name}}</view>
    <view class="navbar-box" v-else>
      <view class="navbar-box--back" @click="back" v-if="!isSearch">
        <Left color="#fff"></Left>
      </view>
      <view class="navbar-search" v-else>
        <nut-searchbar v-model="searchVal" @clear="handleClear" @search="handleSearchChange" placeholder="输入商品名搜索" autofocus>
          <template #leftout>
            <Left @click="back"/>
          </template>
          <template #leftin>
            <Search2 color="#999"/>
          </template>
        </nut-searchbar>
      </view>
      <view v-if="subPageTitle" class="navbar-subtitle" :style="{ 'padding-right': menuWidth + 'px' }">{{subPageTitle}}</view>
    </view>
  </view>
</template>
<script>
import { computed, ref } from 'vue'
import Taro from "@tarojs/taro";
import { Left, Search2 } from '@nutui/icons-vue-taro'
import router from '@/routes'
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    align: {
      type: String,
      default: 'left'
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    subPageTitle: String,
    showBack: Boolean,
    isSearch: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Left,
    Search2
  },
  setup (props, ctx) {
    const title = ref('')
    const searchVal = ref('')
    const menuWidth = ref(0)
    const onClick = () => {
      console.log('click')
    }
    const getNavHeight = () => {
      const menuButtonObject = Taro.getMenuButtonBoundingClientRect(); //获取胶囊对象
      const sysinfo = Taro.getSystemInfoSync(); // 获取设备系统对象
      let statusBarHeight = sysinfo.statusBarHeight; // 获取状态栏高度
      let menuBottonHeight =  menuButtonObject.height; //获取胶囊顶部高度
      let menuBottonTop =  menuButtonObject.top; // 获取胶囊距离顶部的高度
      menuWidth.value = menuButtonObject.width
      let navBarHeight = statusBarHeight + menuBottonHeight + (menuBottonTop - statusBarHeight) * 2 ; //计算nav导航栏的高度（上图蓝色线段的长度）
      return {
        menuBottonTop,
        navBarHeight,
        statusBarHeight,
        width: menuButtonObject.width
      }
    }
    const style = computed(() => {
      const { navBarHeight, statusBarHeight, width } = getNavHeight()
      return {
        height: navBarHeight + 'px',
        'padding-top': statusBarHeight + 'px',
        'padding-left': props.showBack ? '10px' : (props.isSearch ? 0 : '18px'),
        'padding-right': props.showBack ? '10px' : (props.isSearch ? width + 10 + 'px' : '18px')
      }
    })
    const back = () => {
      router.back()
    }
    const handleClear = () => {
      searchVal.value = ''
    }
    const handleSearchChange = (val) => {
      console.log(val)
      ctx.emit('search', val)
    }
    return {
      style,
      title,
      onClick,
      back,
      searchVal,
      handleClear,
      handleSearchChange,
      menuWidth
    }
  }
}
</script>
<style lang="scss">
.navbar-wrapper {
  display: flex;
  box-sizing: border-box;
  padding: 0 32px;
  align-items: center;
  .nut-navbar {
    box-shadow: none;
  }
  .center {
    color: #333333;
    width: 100%;
    text-align: center;
  }
}
.navbar-title {
  color: #fff;
  font-weight: 500;
}

.navbar-box {
  flex: 1;
  display: flex;
  align-items: center;
  .navbar-subtitle {
    flex: 1;
    text-align: center;
  }
  &--back {
    width: 60px;
    height: 60px;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(0, 0,0, 0.3);
  }
}
</style>
