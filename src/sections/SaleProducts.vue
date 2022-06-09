<template>
<div class="product-list mt-5" id="product-list">
    <p v-if="loading">Loading...</p>
    <div class="container" v-else>
        <h1 class="text-center p-5">Flass Sale</h1>
        <div class="row row-item">
            <div v-for="product in products" :key="product.id" class="col-md-3 mt-3">
                <!-- PRODUCT SALE -->
                <div class="card product-item">
                    <img :src="`${product.img}`" :alt="`${product.name}`" class="card-img-top he">
                    <span class="sale">-20%</span>
                    <router-link :to="{name: 'ProductDetail', params: {id: product.id}}"  class="card-body">
                        <strong class="card-title">{{product.title}}</strong>
                        <p class="card-text infor-product">
                                <a class="link-item" href="">{{product.name}}</a> 
                        </p>
                        <p class="row">
                            <strong class="card-text price col-md-6">{{product.price}} ₫</strong>
                            <strong class="col-md-6 text-right price-sale">{{product.price*1.0 + product.price*0.1}}.000₫</strong>
                        </p>
                    </router-link>
                    <button type="button" @click="addProductToCart(product)" class="btn btn-sm btn-addcart">Thêm vào giỏ hàng</button>
                </div>
                <!-- PRODUCT NOT SALE -->

            </div>
        </div>
    </div>
    
</div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: "Product",
  data () {
      return {
          loading: false
      }
  },
  computed: {
      products () {
          return this.$store.getters.saleProducts
      }
  },
  
  created () {
      this.loading = true
      this.$store.dispatch('fetchProducts')
        .then( () => this.loading = false)
  },
  mounted() {
      this.$store.dispatch('getProducts')
  },
  methods: {
      addProductToCart (product) {
          this.$store.dispatch('addProductToCart', product)
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.he {
    height: 320px;
}
p {
    margin-bottom: 0;
    font-size: 14px;

}
.product-list{
    margin-top: 5rem;
    background: #bde0fe;
    padding-bottom: 3rem;
}
.product-item {
    position: relative;
}
.sale {
    height: 44px;
    width: 44px;
    border-radius: 50%;
    background-color: rgb(231, 99, 127);
    color: #fff;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: absolute;
    top: 12px;
    left: 12px;
}
.price-sale {
    color: rgb(156, 156, 156);
    text-decoration: line-through;
}
.card:hover {
    border: 1px solid #000;
}
.card-body {
    text-align: left;
}
// .row-item {
//     margin-bottom: 0rem;
// }
.infor-product {
    display: -webkit-box;
    max-width: 100%;
    max-height: 60px;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.link-item {
    text-decoration: none;
    color: rgb(17, 17, 17);
}
.btn-addcart {
    margin:  0 1rem 1rem;
    background-color: #ffc8dd;
    border: 1px solid #ccc;
}
.text-right {
    text-align: right;
}
</style>
