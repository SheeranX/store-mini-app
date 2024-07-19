<template>
  <nut-grid :border="false">
    <nut-grid-item v-for="(item, index) in list" :key="index" :text="item.name">
      <nut-avatar size="normal">
        <image :src="item.url"/>
      </nut-avatar>
    </nut-grid-item>
  </nut-grid>
</template>
<script setup>
defineProps({
  list: Array
})
</script>
