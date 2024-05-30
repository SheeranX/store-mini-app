<template>
  <AddCart v-if="barType === 'cart'"></AddCart>
  <OrderBuy v-else></OrderBuy>
</template>
<script>
import AddCart from './add-cart.vue'
import OrderBuy from './order-buy.vue'
export default {
  inheritAttrs: true,
  props: {
    barType: {
      type: String,
      default: 'cart'
    }
  }
}
</script>
