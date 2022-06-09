<template>
<div class="product-list">
    <p v-if="loading">Loading...</p>
    <div class="container" v-else>
        <h1 class="text-center p-5">Sản phẩm của Cerave</h1>
        <div class="row row-item">
            <div v-for="product in products" :key="product.id" v-if="product.brand=='Cerave'" class="col-md-3 mt-3">
                <div class="card product-item">
                    <img :src="`${product.img}`" :alt="`${product.name}`" class="card-img-top he">
                    <router-link :to="{name: 'ProductDetail', params: {id: product.id}}"  class="card-body">
                        <strong class="card-title">{{product.title}}</strong>
                        <p class="card-text infor-product">
                                <a class="link-item" href="">{{product.name}}</a> 
                        </p>
                        <p><strong class="card-text price">{{product.price}} ₫</strong></p>
                    </router-link>
                    <button type="button" @click="addProductToCart(product)" class="btn btn-sm btn-addcart">Thêm vào giỏ hàng</button>
                </div>
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
          return this.$store.getters.availableProducts
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
    background: #ffc8dd;
    padding-bottom: 3rem;
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
    background-color: #bde0fe;
    border: 1px solid #ccc;
}
</style>
