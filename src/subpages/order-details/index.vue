<template>
  <div class="order-details-wrapper">
    <Navbar name="订单详情" align="center" show-back :show-title="false" subPageTitle="订单详情"></Navbar>
    <div class="order-details-wrapper--status">待收货</div>
    <div class="order-details-wrapper--express">
      <div></div>
    </div>
    <div class="order-details-wrapper--box">
      <div class="order-details-wrapper--express">收货地址</div>
      测试测试
    </div>
    <div class="order-details-wrapper--box">
      <div class="order-details-wrapper--item">
        <div>订单商品列表</div>
      </div>
    </div>
    <div class="order-details-wrapper--box">
      <div class="order-details-wrapper--box__item">
        <div class="order-details-wrapper--box__item--title">订单编号：</div>
        <div class="order-details-wrapper--box__item--content">yy7u78u9iu</div>
      </div>
      <div class="order-details-wrapper--box__item">
        <div class="order-details-wrapper--box__item--title">下单时间：</div>
        <div class="order-details-wrapper--box__item--content">2024-09-09</div>
      </div>
      <div class="order-details-wrapper--box__item">
        <div class="order-details-wrapper--box__item--title">支付方式：</div>
        <div class="order-details-wrapper--box__item--content">微信支付</div>
      </div>
      <div class="order-details-wrapper--box__item">
        <div class="order-details-wrapper--box__item--title">支付时间：</div>
        <div class="order-details-wrapper--box__item--content">2024-09-09</div>
      </div>
    </div>
    <div class="order-details-wrapper--box">
      <div class="order-details-wrapper--box__item">
        <div class="order-details-wrapper--box__item--title">商品总额：</div>
        <div class="order-details-wrapper--box__item--content">¥ 121</div>
      </div>
      <div class="order-details-wrapper--box__item">
        <div class="order-details-wrapper--box__item--title">运费：</div>
        <div class="order-details-wrapper--box__item--content">¥ 20</div>
      </div>
      <div class="order-details-wrapper--box__item">
        <div class="order-details-wrapper--box__item--title">实付款：</div>
        <div class="order-details-wrapper--box__item--content">¥ 1111</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.order-details-wrapper {
  font-size: 28px;
  color: #333;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  &--item {
    padding: 0 20px;
  }
  &--express {
    padding: 0 20px;
  }
  &--status {
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: #efefef;
  }
  &--box {
    border-radius: 5px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin: 0 20px;
    box-shadow: 0 0 30px rgba(0, 0, 0, .1);
    &__item {
      height: 60px;
      display: flex;
      line-height: 60px;
      border-bottom: 1px solid #ededed;
      &--title {
        width: 200px;
        color: #999999;
      }
      &--content{
      }
      &:last-child {
        border: none;
      }
    }
  }
}
</style>
