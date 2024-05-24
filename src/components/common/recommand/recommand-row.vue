<template>
  <div class="good-item-row">
    <Card v-for="(item, index) in 10" :key="index"></Card>
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
</script>
