<template>
    <nut-popup :visible="visible" @update:visible="handleClose" position="bottom" closeable>
      <div class="custom-popup">
        <div class="custom-popup--content">
          <h4 class="custom-popup--title">{{mainTitle}}</h4>
          <slot></slot>
        </div>
        <nut-button block type="primary" @click="handleConfirm">确定</nut-button>
      </div>
    </nut-popup>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps({
  visible: Boolean,
  mainTitle: String
})
const emits = defineEmits(['update:visible', 'confirm'])
const handleClose = (val = false) => {
  emits('update:visible', val)
}
const handleConfirm = () => {
  const resolve = () => {
    handleClose()
  }
  emits('confirm', resolve)
}
</script>
<style lang="scss">
.custom-popup {
  padding: 30px 20px 40px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  &--title {
    text-align: center;
  }
  &--content {
    flex: 1;
    overflow: auto;
    padding: 20px 0;
    max-height: 80vh;
  }
}
</style>
