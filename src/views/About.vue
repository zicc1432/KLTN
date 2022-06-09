<template>
  <div class="about">
    <h1 class="title ">Cùng Beauty Shop tìm sản phẩm phù hợp với da của bạn</h1>
    <CheckSkin/>
    <ProductList/>
  </div>
</template>
<script>
import CheckSkin from '@/sections/CheckSkin.vue'
import ProductList from '@/sections/ProductList.vue'

export default {
  name: 'about',
  components: {
    CheckSkin,
    ProductList
  }
}
</script>

<style scoped>
.title {
  font-style: italic;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  color: #000;
  margin-top: 6rem;
}
</style>>


