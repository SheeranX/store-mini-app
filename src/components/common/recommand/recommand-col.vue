<template>
  <view class="good-item-col">
    <Card v-for="(item, index) in 10" :key="index" @click="handleClick(item)"></Card>
  </view>
</template>
<script setup>
import Card from './card.vue'
defineProps({
  info: {
    type: Object,
    default: () => ({})
  }
})
const emits = defineEmits(['item-click'])
const handleClick = (item) => {
  emits('item-click', item)
}
</script>
