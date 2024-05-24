<template>
  <div class="navbar-wrapper" :style="style">
    <div class="navbar-title" v-if="showTitle">{{name}}</div>
    <div class="navbar-box">
      <Left v-if="showBack"/>
    </div>
  </div>
</template>
<script>
import { computed, ref } from 'vue'
import Taro from "@tarojs/taro";
import { Left } from '@nutui/icons-vue-taro'
export default {
  props: {
    name: {
      type: String,
      default: '111'
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    showBack: Boolean
  },
  components: {
    Left
  },
  setup () {
    const title = ref('')
    const onClick = () => {
      console.log('click')
    }
    const getNavHeight = () => {
      const menuButtonObject = Taro.getMenuButtonBoundingClientRect(); //获取胶囊对象
      const sysinfo = Taro.getSystemInfoSync(); // 获取设备系统对象
      let statusBarHeight = sysinfo.statusBarHeight; // 获取状态栏高度
      let menuBottonHeight =  menuButtonObject.height; //获取胶囊顶部高度
      let menuBottonTop =  menuButtonObject.top; // 获取胶囊距离顶部的高度
      let navBarHeight = statusBarHeight + menuBottonHeight + (menuBottonTop - statusBarHeight) * 2 ; //计算nav导航栏的高度（上图蓝色线段的长度）
      return {
        menuBottonTop,
        navBarHeight,
        statusBarHeight
      }
    }
    const style = computed(() => {
      const { navBarHeight, statusBarHeight } = getNavHeight()
      return {
        height: navBarHeight + 'px',
        'padding-top': statusBarHeight + 'px'
      }
    })
    return {
      style,
      title,
      onClick
    }
  }
}
</script>
<style>
.navbar-wrapper {
  display: flex;
  box-sizing: border-box;
  padding: 0 32px;
  align-items: center;
}
.navbar-title {
  color: #fff;
  font-weight: 500;
}
.navbar-box {
  flex: 1;
}
</style>
