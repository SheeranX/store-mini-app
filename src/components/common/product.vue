<template>
  <nut-card
      :img-url="info.imgUrl"
      :title="info.title"
      :shop-desc="info.shopDesc"
      :vip-price="false"
      @click="handleClick(item)"
  >
    <template #price>
      <nut-price :price="199" size="normal" />
      <nut-price :price="299" :decimal-digits="0" strike-through size="small" class="price-disable"/>
    </template>
    <template #prolist>
      <div class="card-tag-list">
        <span class="tag">活鲜</span>
        <span class="tag">礼盒</span>
        <span class="tag">国产</span>
      </div>
    </template>
  </nut-card>
</template>
<script setup>
defineProps({
  info: {
    type: Object,
    default: () => ({})
  }
})
const handleClick = () => {}
</script>
