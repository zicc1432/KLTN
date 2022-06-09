<template>
<div>
  <div class="product-detail">
  <!-- 
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v12.0" nonce="bX1ZKtlL"></script> -->
    <div class="container ctn-content mt-3">
      <BreadCrumb/>
    <div class="row mt-4">
      <div class="col-md-5 pl-3">
        <div class="col-left">
          <img  class="row main_image mt-5 w-100 " src="/img/product/srm/srm1.jpg" id="main_product_image" width="520px" height="482px"> 
          <!-- <span class="sale">-20%</span> -->
          <!-- </div> -->
          <div class="thumbnail_images">
              <ul id="thumbnail" class="row mt-5 w-100">
                  <li class="col-md-3 image-item"><img onclick="changeImage(this)" src="/img/product/srm/srm1.jpg" height="110px"></li>
                  <li class="col-md-3 image-item"><img onclick="changeImage(this)" src="/img/product/srm/srm1.1.jpg" height="110px"></li>
                  <li class="col-md-3 image-item"><img onclick="changeImage(this)" src="/img/product/srm/srm1.2.jpg" height="110px"></li>
                  <li class="col-md-3 image-item"><img onclick="changeImage(this)" src="/img/product/srm/srm1.3.jpg" height="110px"></li>
              </ul>
          </div>
          <div class="row share">
            <section class="mb-4">
              <p class="btn btn-link btn-floating btn-lg text-dark m-1">Chia sẻ:</p>
              <!-- Facebook -->
              <a
                class="btn-floating btn-lg m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
                ><i class="fab fa-facebook-f"></i
              ></a>

              <!-- Twitter -->
              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
                ><i class="fab fa-twitter"></i
              ></a>

              <!-- Google -->
              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
                ><i class="fab fa-google"></i
              ></a>

              <!-- Instagram -->
              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
                ><i class="fab fa-instagram"></i
              ></a>
            </section>
          </div>
        </div>
      </div>
      <!-- End Images Product -->
      <div class="col-md-7 pl-3 mt-4">
        <div class="content mt-5 mb-3 text-left">
          <p class="name-brand">INNISFREE</p>
          <p class="mt-3 name-product">Sữa rửa mặt innisfree trà xanh Green Tea Cleansing Foam 180ml</p>
          <div class="row">
            <!-- <span class="row text-flashsale" style="color: red">
              <p class="col-2">FLASHSALE:</p>
              <p class="col ">Thời gian còn lại: {{countdown}}</p>
            </span> -->
            <div class="col-5">
              <div class="row ml-3">
                <h2 class="col-8 price">180.000 ₫</h2>
                <!-- <p class="col-4">260.000 ₫</p> -->
              </div>
              <div class="row mt-3 ml-3" role="group" aria-label="First group">
                <p class="col-4">Số lượng: </p>
                <span class="col-7 quantity-box">
                  <button type="button" class="btn" @click="decrement">-</button> 
                  <strong type="text" class="text-center col-1 quantity">{{quantity}}</strong>
                  <button type="button" class="btn " @click="increment">+</button>
                </span>

              </div>
            </div>
          </div>
          
          <div class="mt-4">
            <button class="btn btn-add mt-3" @click="addProductToCart()">Thêm vào giỏ hàng</button>
            <button class="btn btn-add btn-add-now mt-3 ml-3 text-white">Mua ngay</button>
          </div>
          <div class="desctiption mt-4">
            <div class="row detail-cmt">
              <h4 class="col-5" @click="isShow=true">Chi tiết sản phẩm</h4>
              <h4 class="col-5" @click="isShow=false">Đánh giá sản phẩm</h4>
            </div>
            <!-- Chi tiet san pham -->
            <span v-if="isShow">
              <p>Sữa rửa mặt Innisfree Green Tea Cleansing Foam chứa chiết xuất 88% từ lá trà xanh tự nhiên, giàu độ ẩm và các thành phần chống oxi hoá, giúp làm sạch bụi bẩn và các tạp chất trên da, hút nhờn và ngăn ngừa những dấu hiệu làm lão hoá da. Đặc biệt phù hợp với da dầu và có mụn. Đây là sản phẩm sữa rửa mặt chất lượng được ưa chuộng nhất hiện nay. </p>
              <strong>Thành phần: </strong>
              <p class="mt-3">- CHIẾT XUẤT HOA CÚC VÙNG KYOTO Nhật Bản giúp da kháng khuẩn, chống oxi hóa, thanh lọc, cung cấp độ ẩm cho làn da sạch thoáng, ẩm mịn & sáng rạng rỡ.</p>
              <p>- SALICYLIC ACID: Thuộc nhóm BHA, ngăn chặn tình trạng mụn do bít tắt lỗ chân lông, loại bỏ lượng dầu thừa trên da, kích thích quá trình tái tạo tế bào da mới mịn màng và rạng rỡ hơn.</p>
              <p>- Công nghệ dưỡng ẩm AQUA IN POOL: Độc quyền từ Shiseido kết hợp với tinh chất TƠ TẰM TRẮNG</p> 
              <p>- Gấp đôi HYALURONIC ACID DƯỠNG ẨM SÂU</p> 
              <p>- Bọt Tơ tằm siêu dày và mịn: Hạt bọt mịn hơn gấp 5 lần, làm sạch sâu bên trong lỗ chân lông. Đồng thời giảm ma sát giữa da và tay, hạn chế tổn thương da và lão hóa sớm.</p>
              <strong>Công dụng: </strong>
              <p class="mt-3">- Làm sạch sâu và dịu nhẹ: Lấy sạch bụi bẩn, bã nhờn tận sâu lỗ chân lông mà không làm khô da với hoạt chất Sodium Cocoamphoacetate TEA-Cocoyl Glutamate Sodium Cocoyl Alaninate chiết xuất hoàn toàn từ tự nhiên (có trong trà xanh và lá hương thảo) </p>
              <p>- Xóa nhăn, trẻ hóa, làm đều màu da với Thành phần chiết xuất tự nhiên từ lá hoa Camellia được cấp bằng sáng chế Mỹ phẩm chống oxy hóa 2020 tại Hàn Quốc</p>
              <p>- Detox da và thư giãn tế bào da: Với hàm lượng quý giá Ceramide cao giúp đào thải chì và các khoáng chất có hại trong các sản phẩm makeup, xây dựng hàng rào allantbin bảo vệ da cả ngày dài</p>
              <strong>Hướng dẫn bảo quản:</strong>
              <p class="mt-3">- Tránh ánh sáng trực tiếp, nơi có nhiệt độ cao hoặc ẩm ướt.</p>
              <p>- Để xa tầm tay trẻ em.</p>
            </span>
            <!-- Danh gia san pham -->
            <span v-if="!isShow">
            <div class="comment">
              <strong class="mb-3">Nhận xét sản phẩm</strong>            
              <div class="d-flex flex-start w-100 mt-3">
                <img
                  class="rounded-circle shadow-1-strong me-3"
                  src="https://i.pinimg.com/564x/33/38/5f/33385fecab39c398eab0e18e29a3fc00.jpg"
                  alt="avatar"
                  width="65"
                  height="65"
                />
                <div class="w-100">
                  <h5>Đánh giá sản phẩm</h5>
                  <div class="form-outline">
                    <input @keyup.enter="addCmt" type="text" v-model="title" class="form-control" placeholder="Nhập nhận xét tại đây" aria-label="Recipient's username" aria-describedby="basic-addon2">

                  </div>
                  <div class="d-flex justify-content-between mt-3">
                    <button @click="addCmt" class="btn btn-info" type="button">
                      Gửi <i class="fas fa-long-arrow-alt-right ms-1"></i>
                    </button>

                  </div>
                  </div>
                </div>  
              <hr>
              <div class="mt-3 mb-3">
                <ul>
                    <li class="d-flex flex-start w-100 mt-3" v-for="cmt in comments" :key="cmt">
                      <img
                        class="rounded-circle shadow-1-strong me-3 mt-3"
                        src="https://i.pinimg.com/564x/33/38/5f/33385fecab39c398eab0e18e29a3fc00.jpg"
                        alt="avatar"
                        width="65"
                        height="65"
                      />
                      <p class="commented col-md-11">{{cmt}}</p> 
                    </li>
                    <li class="d-flex flex-start w-100 mt-3 box-cmt">
                      <img
                        class="rounded-circle shadow-1-strong  me-3 mt-3"
                        src="https://i.pinimg.com/564x/9b/8c/d8/9b8cd8289bb10c916cdf521d730dbc48.jpg"
                        alt="avatar"
                        width="65"
                        height="65"
                      />

                      <p class="commented">Sản phẩm chất lượng tốt, Sản phẩm dùng rất thích với những thành phần phù với từng loại da thiết kế bắt mắt, giá cả bình dân phù hợp với học sinh, sinh viên mới bắt đầu tập skincare</p>  
                    </li>
                    <li class="d-flex flex-start w-100 mt-3 box-cmt">
                      <img
                        class="rounded-circle shadow-1-strong me-3 mt-3"
                        src="https://i.pinimg.com/564x/9b/8c/d8/9b8cd8289bb10c916cdf521d730dbc48.jpg"
                        alt="avatar"
                        width="65"
                        height="65"
                      />

                      <p class="commented">Busanya lembut banget. walaupun busanya banyak tapi tidak membuat kulit kering dan setelah pemakaian kulit terasa lebih cerah dan lebih halus. minyak dibawah juga jadi sedikit berkurang</p>  
                    </li>
                </ul>
              </div>
            </div>
            </span>
          </div>       
        </div>
      </div>
      </div>
  </div>
  </div>
  <ProductSuggestion/>
  <Footer/>
</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import shop from '@/api/shop'
import Footer from "@/components/Footer.vue"
import ProductSuggestion from "@/sections/ProductSuggestion.vue"

export default {
  data() {
    return {

      title: '',
      comments: [],
      countdown: 60,
      isShow: true,
    }
  },
    props: ['product'],
    components: {
      Footer,
      ProductSuggestion
    },
    computed: {
      ...mapGetters([
        'quantity',
        'product'
      ])
    },
    methods: {
      ...mapActions([
        'increment',
        'decrement',
      ]),
      addCmt() {
        if (this.title!="") {      
        this.comments.unshift(this.title)
        this.title=""
        }
      },
      addProductToCart (product) {
          this.$store.dispatch('addProductToCart', product)
      },
      countDownTimer() {
          if(this.countdown > 0) {
              setTimeout(() => {
                  this.countdown -= 1
                  this.countDownTimer()
              }, 1000)
          }
      }
    },
    created() {
           this.countDownTimer()
    },
    mounted() {
      this.productDetail(this.$route.params.idProduct)

    }
}
</script>

<style lang="scss" scoped>
.text-white {
    color: white;
}
.product-detail {
  background-color: rgb(252, 196, 205);
}
.pl-3 {
  padding-left: 2em;
}
.ml-3 {
  margin-left: 6px;
}
.ctn-content {
  background-color: white;
}
.text-left {
  text-align: left;
}
.price {
  color: rgb(253, 25, 94);
  padding: 5px;
}
.quantity-box {
  border: 1px solid #ccc;
}
.quantity {
  margin: auto 1.5rem;
}
.btn-add {
  width: 40%;
  height: 3rem;
  border: 1px solid #000;
}
.btn-add-now {
  background-color: rgb(253, 25, 94);
  border: none;
}
ul {
  padding-left: 0;
}
li {
  list-style: none;
  float: left;
}
.col-left {
  position: relative;
}
.sale {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: rgb(218, 61, 95);
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
.image-item {
  transform: scale(1);
  transition: all 0.5s;
}
.image-item:hover {
  transform: scale(1.1);
}
.text-flashsale {
  font-family: SVN-brandontext-bold,sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  line-height: 2.4;
}
.percent {
  font-size: 24px;
  font-weight: 500;
}
.detail-cmt >h4 {
  border-bottom: 2px solid #ccc;
  line-height: 2;
}
.detail-cmt > h4:hover {
  border-bottom: 2px solid #000;
}
.form-outline input{
  height: 60px;
}
.commented {
  line-height: 2em;
  padding: 10px 0 0 10px;
  // border: 1px solid #badcfa;
  // border-radius: 6px;
}
.box-cmt {
  border-top: 2px solid #ccc;

}
.mb-3 {
  padding-bottom: 2rem;
}
.mt-3 {
  margin-top: 1rem;
}
</style>