<template>
<div>
<div class="container mt-5 product-list">
    <BreadCrumb/>
    <div class="row">
        <div class="col-md-3">
            <div class="list">
                <h4 class="mt-5 text-left">Sản phẩm</h4>                
            </div>
        </div>
        <div class="col-md-9">
            <div class="row mt-5">
                <ul class="nav" >
                    <p class="text-left btn">Sắp xếp theo</p>
                    <button type="button" class="btn btn-addcart btn-sm">Mới nhất</button>
                    <button type="button" class="btn btn-addcart btn-sm">Bán chạy</button>
                    <select class="form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option selected>Giá</option>
                        <option value="1">Từ thấp đến cao</option>
                        <option value="2">Từ cao đến thấp</option>
                    <!-- <option value="3">Three</option> -->
                    </select>
                </ul>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-3 list-st">
            <div class="mt-5">
            <div class="col-lg-3 mb-lg-0 mb-2">
                <p> <a class="btn  d-flex align-items-center justify-content-between" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true" aria-controls="collapseExample"> <strong class="">Category</strong>
                    <span class="fas fa-chevron-down"></span> </a> 
                </p>
                <div class="collapse show" id="collapseExample">
                    <ul class="list-unstyled">
                        <li><a class="dropdown-item itm" href="#">Sữa rửa mặt</a></li>
                        <li><a class="dropdown-item itm" href="#">Serum</a></li>
                        <li><a class="dropdown-item itm" href="#">Nước tẩy trang</a></li>
                        <li><a class="dropdown-item itm" href="#">Toner</a></li>
                        <li><a class="dropdown-item itm" href="#">Tẩy tế bào chết</a></li>
                        <li><a class="dropdown-item itm" href="#">Dưỡng ẩm</a></li>
                        <li><a class="dropdown-item itm" href="#">Kem chống nắng</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-3 mb-lg-0 mb-2">
            <p> <a class="btn  d-flex align-items-center justify-content-between" > <strong class="">Brand</strong>
                 </a> 
            </p>
            <div class="collapse show" id="collapseExample">
                <ul class="list-unstyled">
                    <li><a class="dropdown-item itm" href="#">Innisfree</a></li>
                    <li><a class="dropdown-item itm" href="#">Senka</a></li>
                    <li><a class="dropdown-item itm" href="#">Cosrx</a></li>
                    <li><a class="dropdown-item itm" href="#">Cerave</a></li>
                    <li><a class="dropdown-item itm" href="#">Hada Lapo</a></li>
                    <li><a class="dropdown-item itm" href="#">Klairs</a></li>
                    <li><a class="dropdown-item itm" href="#">Klairs</a></li>
                    <li><a class="dropdown-item itm" href="#">Obagi</a></li>
                </ul>
            </div>
            </div>
            </div>
        </div>
        <div class="col-md-9">
            <div class="row">
                <div class=" mt-5" id="product-list">
                <p v-if="loading">Loading...</p>
                <div v-else>
                    <div class="row row-item">
                        <div v-for="product in products" :key="product.id" class="col-md-3 mt-3">
                            <!-- PRODUCT SALE -->
                            <div  v-if="product.sale !=0" class="card product-item">
                                <img :src="`${product.img}`" :alt="`${product.name}`" class="card-img-top he">
                                <!-- <img :src="`${product.img}`" :alt="`${product.name}`" class="card-img-top he"> -->
                                <span class="sale">-20%</span>
                                <router-link :to="{name: 'ProductSale', params: {id: product.id}}"  class="card-body">
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
                            <div v-if="product.sale == 0" class="card product-item">
                                <img :src="`${product.img}`" :alt="`${product.name}`" class="card-img-top he">
                                <router-link :to="{name: 'ProductDetail', params: {id: product.id}}"  class="card-body">
                                    <strong class="card-title">{{product.title}}</strong>
                                    <p class="card-text infor-product">
                                            <a class="link-item" href="">{{product.name}}</a> 
                                    </p>
                                    <p class="row">

                                    <strong class="card-text price">{{product.price}} ₫</strong>
                                    </p>
                                    
                                </router-link>
                                <button type="button" @click="addProductToCart(product)" class="btn btn-sm btn-addcart">Thêm vào giỏ hàng</button>
                            </div>

                        </div>
                    </div>
                    <router-link>Xem thêm</router-link>
                </div>
                
</div>
            </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
import BreadCrumb from '../components/BreadCrumb.vue'
export default {
  components: { BreadCrumb },
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


}
</script>

<style lang="scss" scoped>
.he {
    height: 250px;
}
.text-left {
    text-align: left;
}
.imt {

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