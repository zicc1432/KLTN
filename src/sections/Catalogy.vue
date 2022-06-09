<template>
<div class="product-list mt-5" id="product-list">
    <div class="container">
        <h2 class="text-title text-center p-5">DANH MỤC SẢN PHẨM</h2>
            <div class="row">            
                <div class="col-md-3">
                    <router-link  to="/toner"  class="card product-item">
                        <img src="/img/product-list/toner.jpg" class="card-img-top he" alt="...">
                            <div class="card-body">
                                <p class="card-title">TONER</p>
                            </div>
                    </router-link>
                </div>

                <div class="col-md-3">
                    <router-link to="/serum" class="card product-item">
                        <img src="/img/product-list/serum.jpg" class="card-img-top he" alt="...">
                            <div class="card-body">
                                <p class="card-title">SERUM- TINH CHẤT</p>
                            </div>
                    </router-link>
                </div>

                <div class="col-md-3">
                    <router-link to="/srm" class="card product-item">
                        <img src="/img/product/srm/srm1.jpg" class="card-img-top he" alt="...">
                        <div class="card-body">
                            <p class="card-title">SỮA RỬA MẶT</p>
                        </div>
                    </router-link>
                </div>

                <div class="col-md-3">
                    <router-link to="/duongda" class="card product-item">
                        <img src="/img/product-list/kd.png" class="card-img-top he" alt="...">
                        <div class="card-body">
                            <p class="card-title">DƯỠNG DA</p>
                        </div>
                    </router-link>
                </div>
                <div class="col-md-3">
                    <router-link to="/tdc" class="card product-item">
                        <img src="/img/product/taytebaochet/hoahoc/tdc1.jpg" class="card-img-top he" alt="...">
                        <div class="card-body">
                            <p class="card-title">TẨY TẾ BÀO CHẾT</p>
                        </div>
                    </router-link>
                </div>
                <div class="col-md-3">
                    <router-link to="/tt" class="card product-item">
                        <img src="/img/product-list/ntt.jpg" class="card-img-top he" alt="...">
                        <div class="card-body">
                            <p  class="card-title">TẨY TRANG</p>
                        </div>
                    </router-link>
                </div>
                        
                <div class="col-md-3">
                    <router-link to="/mask" class="card product-item">
                        <img src="/img/product/mask/matna1.jfif" class="card-img-top he" alt="...">
                            <div class="card-body">
                                <p class="card-title">MẶT NẠ- MASK</p>
                            </div>
                    </router-link>
                </div>

                <div class="col-md-3">
                    <router-link to="/dactri" class="card product-item">
                        <img src="/img/product-list/serum.jpg" class="card-img-top he" alt="...">
                            <div class="card-body">
                                <p class="card-title">ĐẶC TRỊ</p>
                            </div>
                    </router-link>
                </div>

            </div>
    </div>
    
</div>
</template>

<script>
export default {
  name: "Catalogy",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.text-title {
    font-weight: 400;    
}
.product-list{
    background:  rgb(255, 255, 255);
    padding-bottom: 3rem;
}
.card {
    margin-top: 1.5rem;
}
.card:hover {
    border: 0.5px solid rgb(88, 88, 88);
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
</style>
