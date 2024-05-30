<template>
  <Container page-title is-child is-bottom>
    <div class="order-buy">
      <div class="order-buy--address">
        <div class="order-buy--address__title">测试 <span class="phone">15109090908</span></div>
        <nut-ellipsis direction="start" content="浙江省绍兴市" rows="2" class="order-buy--address__name"></nut-ellipsis>
      </div>
      <box>
        <div class="order-list">
          <template v-for="(item, index) in list" :key="index">
            <cart-item is-order></cart-item>
          </template>
        </div>
      </box>
    </div>
    <template #bottom>
      <operate-bar barType="buy"></operate-bar>
    </template>
  </Container>
</template>
<script setup>
import Container from "@/components/common/container.vue";
import OperateBar from "@/components/common/operate-bar/index.vue";
import CartItem from "@/pages/cart/widgets/cart-item.vue";
import Box from "@/components/common/box.vue";
import {ref} from "vue";
const list = ref([{}])
</script>
<style lang="scss">
.order-buy {
  padding: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  .order-list {
    display: flex;
    overflow-y: auto;
    overflow-x: hidden;
    flex-direction: column;
  }
  &--address {
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 0 30px rgba(0, 0, 0, .1);
    &__title {
      display: inline-flex;
      column-gap: 20px;
      align-items: center;
      font-weight: 500;
      font-size: 28px;
      .phone {
        color: #999999;
        font-size: 24px;
        font-weight: 400;
      }
    }
    &__name {
      color: #555;
      margin-top: 10px;
      font-weight: 400;
      font-size: 24px;
    }
  }
}
</style>
