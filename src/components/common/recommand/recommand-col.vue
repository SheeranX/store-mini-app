<template>
  <view class="good-item-col">
    <Card v-for="(item, index) in data" :key="index" @click="handleClick(item)" :info="item"></Card>
  </view>
</template>
<script setup>
import Card from './card.vue'
defineProps({
  data: {
    type: Object,
    default: () => []
  }
})
const emits = defineEmits(['item-click'])
const handleClick = (item) => {
  emits('item-click', item)
}
</script>
