<template>
<div class="voucher" id="voucher">
    <div class="container">
        <h2 class="text-left pb-0">Mã giảm giá giành cho bạn</h2>
        <hr>
        <h4 class="text-left pb-3">Mã giảm giá Beauty Shop</h4>
        <div class="row">            
            <div class="col-2">
                <div @click="showModal=true" class=" product-item">
                    <img src="/img/images/voucher1.png" class="card-img-top he" alt="...">
                    
                </div>
                <ModalVoucher v-if="showModal" @close="showModal=false"></ModalVoucher>
            </div>
            <div class="col-2">
                <div class=" product-item">
                    <img src="/img/images/voucher2.png" class="card-img-top he" alt="...">
                        <div class="card-body">
                            
                        </div>
                </div>
            </div>
            <div class="col-2">
                <div class=" product-item">
                    <img src="/img/images/voucher3.jpg" class="card-img-top he" alt="...">
                        <div class="card-body">
                            
                        </div>
                </div>
            </div>

            <div class="col-2">
                <div class="product-item">
                    <img src="/img/images/voucher4.jpg" class="card-img-top he" alt="...">
                    <div class="card-body">
                        
                    </div>
                </div>
            </div>

            <div class="col-2">
                <div class="product-item">
                    <img src="/img/images/voucher3.jpg" class="card-img-top he" alt="...">
                    <div class="card-body">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import ModalVoucher from './ModalVoucher.vue'
export default {
  name: "voucher",
  data() {
      return {
          showModal: false
      }
  },
  props: {
    msg: String
  },
  components: {
      ModalVoucher
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.col-2 {
    width: 20%;
}
.voucher{
    margin-top: 8rem;
    background:  #fff;
    padding-bottom: 3rem;
}
.he {
    height: 320px;
}
.cart {
    margin-top: 0;
    
}
.card:hover {
    border: 1px solid #000;
}
.product-item img:hover {
  transform: scale(1.1);
}
.product-item > img {
    height: 200px;
    transform: scale(1);
    transition: all 0.5s;
}
.infor-product {
    display: -webkit-box;
    max-width: 100%;
    max-height: 60px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.link-item {
    text-decoration: none;
    color: rgb(17, 17, 17);
}
.text-left {
    text-align: left;
}
</style>
