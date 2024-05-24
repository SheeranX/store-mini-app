<template>
  <nut-grid :border="false">
    <nut-grid-item v-for="(item, index) in list" :key="index" :text="'商品类目' + index">
      <nut-avatar size="normal">
        <img :src="item"/>
      </nut-avatar>
    </nut-grid-item>
  </nut-grid>
</template>
<script setup>
defineProps({
  list: Array
})
</script>
