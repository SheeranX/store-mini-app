<template>
  <div class="order-buy-box">
    <div class="order-buy-info">
      <div class="order-buy-total">
        总计: <nut-price size="large">1920</nut-price>
      </div>
      <div class="order-buy-express">
        <p class="order-buy-express--price"><span class="txt-gray">运费:</span> 免运费</p>
<!--        <p><nut-price>20</nut-price></p>-->
      </div>
    </div>
    <nut-button type="success">微信支付</nut-button>
  </div>
</template>
<script>
</script>
<style lang="scss">
.order-buy-box {
  display: flex;
  align-items: center;
  column-gap: 40px;
  justify-content: space-between;
  .order-buy-info {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: space-between;
  }
  .order-buy-express--price {
    display: flex;
    column-gap: 20px;
    align-items: center;
  }
}
</style>
