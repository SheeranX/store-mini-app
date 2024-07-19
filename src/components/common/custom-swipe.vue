<template>
  <nut-swiper
      :init-page="2"
      :auto-play="3000"
      pagination-visible
  >
    <nut-swiper-item v-for="(item, index) in list" :key="index" :style="{ height }">
      <image :src="item.url" alt="" style="height: 100%; width: 100%" draggable="false" :mode="mode"/>
    </nut-swiper-item>
  </nut-swiper>
</template>
<script setup>
defineProps({
  list: {
    type: Array,
    default: () => []
  },
  mode: {
    type: String,
    default: 'aspectFit'
  },
  height:{
    type: String,
    default: '150px'
  }
})
</script>
