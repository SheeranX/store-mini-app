<template>
  <nut-swiper
      :init-page="2"
      :auto-play="3000"
      pagination-visible
  >
    <nut-swiper-item v-for="(item, index) in list" :key="index" :style="{ height }">
      <img :src="item" alt="" style="height: 100%; width: 100%" draggable="false" />
    </nut-swiper-item>
  </nut-swiper>
</template>
<script setup>
defineProps({
  list: Array,
  height:{
    type: String,
    default: '150px'
  }
})
</script>
