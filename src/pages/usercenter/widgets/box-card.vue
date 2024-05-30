<template>
  <nut-cell>
    <div class="box-card-wrapper">
      <div class="box-card-wrapper-top">
        <h4 class="box-card-wrapper-top__title">{{mainTitle}}</h4>
        <div class="box-card-wrapper-top__more" v-if="isMore" @click="checkMore">
          <slot name="right">
            <span>更多</span>
          </slot>
        </div>
      </div>
      <div class="box-card-wrapper-content">
        <slot></slot>
      </div>
    </div>
  </nut-cell>
</template>
<script setup>
defineProps({
  mainTitle: String,
  isMore: Boolean
})
const emits = defineEmits(['checkMore'])
const checkMore = () => {
  emits('checkMore')
}
</script>
<style lang="scss">
.box-card-wrapper {
  display: flex;
  width: 100%;
  flex-direction: column;
  &-top {
    display: flex;
    justify-content: space-between;
    &__title {
      font-weight: 500;
      color: #333;
      font-size: 30px;
    }
    &__more {
      color: #999999;
    }
  }
}
</style>
