<template>
  <div class="box">
    <slot></slot>
  </div>
</template>
<style lang="scss">
.box {
  padding: 20px;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0 0 30px rgba(0, 0, 0, .1);
}
</style>
