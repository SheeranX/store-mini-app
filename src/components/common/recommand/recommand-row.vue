<template>
  <div class="good-item-row">
    <Card v-for="(item, index) in 10" :key="index" @click="handleClick(item)"></Card>
  </div>
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
