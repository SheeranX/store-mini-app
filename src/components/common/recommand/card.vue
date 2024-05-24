<template>
  <div class="good-item">
    <img src="https://m.360buyimg.com/n2/jfs/t1/183517/38/7834/227702/60be1915Ed04664b0/eaf7536ab2c5f4b0.jpg" class="good-item--img"/>
    <div class="good-item--brand">
      <h4 class="good-item--brand__text">大行</h4>
      <nut-tag type="danger" size="small">新品</nut-tag>
    </div>
    <div class="good-item--title">
      <h4>这是一个商品</h4>
    </div>
    <div class="good-item--price">
      <nut-price :price="199" size="normal" />
      <nut-price :price="8888" :decimal-digits="0" strike-through size="small"/>
    </div>
  </div>
</template>
