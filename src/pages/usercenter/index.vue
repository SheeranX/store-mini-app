<template>
  <Navbar name="个人中心" align="center"></Navbar>
  <div class="banner center-banner"></div>
  <view class="user-center-page">
    <div class="user-center--avatar">
      <nut-avatar size="large"><img :src="url" /> </nut-avatar>
      <h4 class="user-center--name">nickname</h4>
    </div>
    <div class="user-center-order zIndex-2">
      <box-card main-title="我的订单" is-more @checkMore="checkMore">
        <nut-grid :border="false">
          <nut-grid-item text="待付款" @click="checkMore"><IconFont :name="iconWaitPay" size="30px"/></nut-grid-item>
          <nut-grid-item text="待发货" @click="checkMore"><IconFont :name="iconUnSend" size="30px"/></nut-grid-item>
          <nut-grid-item text="待收货" @click="checkMore"><IconFont :name="iconGet" size="30px"/></nut-grid-item>
          <nut-grid-item text="退款/售后" @click="checkMore"><IconFont :name="iconWidthdraw" size="30px"/></nut-grid-item>
        </nut-grid>
      </box-card>
    </div>
    <div class="user-center-service zIndex-2">
      <box-card main-title="我的服务">
        <nut-grid :border="false">
          <nut-grid-item text="官方客服"><IconFont :name="iconKefu" size="30px"/></nut-grid-item>
          <nut-grid-item text="关于我们"><IconFont :name="iconAbout" size="30px"/></nut-grid-item>
        </nut-grid>
      </box-card>
    </div>
  </view>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { Dongdong, IconFont } from '@nutui/icons-vue-taro';
import BoxCard from './widgets/box-card.vue'
import router from '@/routes'
const iconWaitPay = require('@/assets/icons/icon-wait-pay.png')
const iconUnSend = require('@/assets/icons/icon-unsend.png')
const iconGet = require('@/assets/icons/icon-get.png')
const iconWidthdraw = require('@/assets/icons/icon-withdraw.png')
const iconKefu = require('@/assets/icons/icon-kefu.png')
const iconAbout = require('@/assets/icons/icon-about.png')
export default {
  name: 'Index',
  components: {
    BoxCard,
    Dongdong,
    IconFont
  },
  setup() {
    const state = reactive({
      msg: '欢迎使用 NutUI4.0 开发小程序',
      msg2: '你成功了～',
      type: 'text',
      show: false,
      cover: false,
      url: 'https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png'
    });
    const handleClick = (type, msg, cover = false) => {
      state.show = true;
      state.msg2 = msg;
      state.type = type;
      state.cover = cover;
    };
    const checkMore = () => {
      router.navigate('order-list')
    }
    return {
      ...toRefs(state),
      handleClick,
      iconWaitPay,
      iconUnSend,
      iconGet,
      iconWidthdraw,
      iconKefu,
      iconAbout,
      checkMore
    }
  }
}
</script>

<style lang="scss">
page {
  background: #efefef;
}
.center-banner {
  z-index: 1;
}
.zIndex-2 {
  z-index: 2;
  position: relative;
}
.user-center-page {
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  padding: 20px;
  background: #efefef;
  .user-center--avatar {
    display: flex;
    position: relative;
    z-index: 1;
    align-items: center;
    column-gap: 20px;
  }
  .user-center-order {
    .nut-cell {
      box-shadow: none;
    }
  }
  .user-center--name {
    color: #fff;
  }
}
</style>
