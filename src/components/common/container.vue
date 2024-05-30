<template>
  <div class="page-container">
    <navbar align="center" :show-back="isChild" :show-title="false" :subPageTitle="pageTitle"></navbar>
    <div class="page-container--content">
      <slot></slot>
    </div>
    <div class="page-container--bottom" v-if="isBottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>
<script setup>
import Navbar from "@/components/common/navbar.vue";
const props = defineProps({
  pageTitle: String,
  isChild: Boolean,
  isBottom: Boolean
})
</script>
<style lang="scss">
.page-container {
  box-sizing: border-box;
  display: flex;
  color: #333;
  font-size: 28px;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  &--content {
    flex: 1;
    overflow: auto;
    box-sizing: border-box;
  }
  &--bottom {
    background: #fff;
    position: fixed;
    box-sizing: border-box;
    bottom: 0;
    width: 100%;
    align-items: center;
    box-shadow: 0 -10px 30px rgba(0, 0, 0, .1);
    box-sizing: border-box;
    padding: 20px 20px 40px;
  }
}
</style>
