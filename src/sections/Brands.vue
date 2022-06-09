<template>
<div class="brands mt-5" id="brands">
    <div class="container">
        <h1 class="text-center p-5">Thương hiệu nổi bật</h1>
        <div class="row">            
            <div class="col-2">
                <router-link to="/cerave" class=" product-item">
                    <img src="/img/brands/cerave.png" class="card-img-top he" alt="...">
                        <div class="card-body">
                            
                        </div>
                </router-link>
            </div>
            <div class="col-2">
                <div class=" product-item">
                    <img src="/img/brands/innisfree.jpg" class="card-img-top he" alt="...">
                        <div class="card-body">
                            
                        </div>
                </div>
            </div>
            <div class="col-2">
                <div class=" product-item">
                    <img src="/img/brands/klairs.png" class="card-img-top he" alt="...">
                        <div class="card-body">
                            
                        </div>
                </div>
            </div>

            <div class="col-2">
                <div class="product-item">
                    <img src="/img/brands/laroche.png" class="card-img-top he" alt="...">
                    <div class="card-body">
                        
                    </div>
                </div>
            </div>

            <div class="col-2">
                <div class="product-item">
                    <img src="/img/brands/senka.jfif" class="card-img-top he" alt="...">
                    <div class="card-body">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "brands",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.col-2 {
    width: 20%;
}
.brands{
    margin-top: 7rem;
    background:  #ffc4d6;
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
</style>
