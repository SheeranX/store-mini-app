<template>
  <div class="recommand-wrapper">
    <div class="head-title" :class="{ center: direction === 'col' }">
      <div>{{themeTitle}}</div>
      <div class="more" v-if="direction === 'row'">更多</div>
    </div>
    <div class="recommand-wrapper--content">
      <RecommandRow v-if="direction === 'row'" @item-click="handleClick"></RecommandRow>
      <RecommandCol v-else @item-click="handleClick"></RecommandCol>
    </div>
  </div>
</template>
<script setup>
import RecommandRow from './recommand-row.vue'
import RecommandCol from './recommand-col.vue'
defineProps({
  themeTitle: String,
  direction: {
    type: String,
    default: 'row'
  }
})
const emits = defineEmits(['item-click'])
const handleClick = (item) => {
  emits('item-click', item)
}
</script>
<style lang="scss">
@import './index.scss';
</style>
