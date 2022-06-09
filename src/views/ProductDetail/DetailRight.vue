<template>
    <div>
        <div class="content mt-5">
          <h4><strong>Innisfree</strong> </h4>
          <h3 class="mt-4">Sữa rửa mặt innisfree trà xanh Green Tea Cleansing Foam 180ml</h3>
          <div class="row">
            <div class="col-5">
              <div class="row ml-3 price text-white">
                <h2 class="col-8">180.000 ₫</h2>
                <p class="col-4">260.000 ₫</p>
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
          
          <div class="">
            <button class="btn btn-add mt-3" @click="addProductToCart()">Thêm vào giỏ hàng</button>
            <button class="btn btn-add mt-3 ml-3 bg-btn text-white">Mua ngay</button>
          </div>
          <div class="desctiption mt-3">
            <div class="row">
              <h4 class="col-6" @click="isShow=true">Chi tiết sản phẩm</h4>
              <h4 class="col-6" @click="isShow=false">Đánh giá sản phẩm</h4>
            </div>
            <!-- Chi tiet san pham -->
            <span v-if="isShow">

            <p>Sữa rửa mặt Innisfree Green Tea Cleansing Foam chứa chiết xuất 88% từ lá trà xanh tự nhiên, giàu độ ẩm và các thành phần chống oxi hoá, giúp làm sạch bụi bẩn và các tạp chất trên da, hút nhờn và ngăn ngừa những dấu hiệu làm lão hoá da. Đặc biệt phù hợp với da dầu và có mụn. Đây là sản phẩm sữa rửa mặt chất lượng được ưa chuộng nhất hiện nay. </p>
            <pre>Sữa rửa mặt Innisfree Green Tea Cleansing Foam chứa chiết xuất 88% từ lá trà xanh tự nhiên, 
giàu độ ẩm và các thành phần chống oxi hoá, giúp làm sạch bụi bẩn và các tạp chất trên da, 
hút nhờn và ngăn ngừa những dấu hiệu làm lão hoá da. Đặc biệt phù hợp với da dầu và có mụn. 
Đây là sản phẩm sữa rửa mặt chất lượng được ưa chuộng nhất hiện nay.
- Chứa thành phần tro núi lửa (76ppm) kết hợp với đất sét từ dung nham do núi lửa phun
trào giúp loại bỏ bã nhờn và các cặn bẩn, tạp chất hiệu quả.
- Khả năng tạo các hạt nam châm Micellar giúp tăng hiệu quả làm sạch nhưng vẫn giữ lại độ 
ẩm cho da.
- Kết cấu xốp mịn dễ dàng tạo bọt mang lại cảm giác sạch thoáng với làn da mềm mại không gây 
căng kít.
            </pre>
                          
            </span>
            <!-- Danh gia san pham -->
            <span v-if="!isShow">
            <div class="comment">
              <strong class="mb-3">Nhận xét sản phẩm</strong>            
              <div class="d-flex flex-start w-100">
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
              <div class="mt-3">

                <ul>
                    <li class="d-flex flex-start w-100 mt-3" v-for="cmt in comments" :key="cmt">
                      <img
                        class="rounded-circle shadow-1-strong me-3"
                        src="https://i.pinimg.com/564x/33/38/5f/33385fecab39c398eab0e18e29a3fc00.jpg"
                        alt="avatar"
                        width="65"
                        height="65"
                      />
                      <p class="commented col-md-11">{{cmt}}</p> 
                    </li>
                    <li class="d-flex flex-start w-100 mt-3">
                      <img
                        class="rounded-circle shadow-1-strong me-3"
                        src="https://i.pinimg.com/564x/9b/8c/d8/9b8cd8289bb10c916cdf521d730dbc48.jpg"
                        alt="avatar"
                        width="65"
                        height="65"
                      />

                      <p class="commented col-md-11">Sản phẩm chất lượng tốt</p>  
                    </li>
                </ul>
              </div>
            </div>
            </span>
          </div>       
        </div>
    </div>
</template>

<script>
export default {
data() {
    return {

      title: '',
      comments: [],
      isShow: true,
    }
  },
    props: ['product'],
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
      }
    },

}
</script>

<style lang="sss" scoped>
.text-white {
    color: white;
}
.product-detail {
  background-color: rgb(238, 235, 235);
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
.content {
  text-align: left;
}
.price {
  background-image: linear-gradient(to right, rgb(253, 25, 94) , rgb(245, 148, 69));
  padding: 5px;
}
.quantity-box {
  border: 1px solid #ccc;
}
.quantity {
  margin: auto 1.5rem;
}
.btn-secondary {
  margin-left: 1rem;
}
.btn-add {
  width: 40%;
  border: 1px solid #000;
}
.bg-btn {
  background-color: rgb(253, 25, 94);
}
ul {
  padding-left: 0;
}
li {
  list-style: none;
  float: left;
}
.form-outline input{
  height: 60px;
}
.commented {
  line-height: 3em;
  padding-left: 10px;
  border: 1px solid #badcfa;
  border-radius: 6px;
}
</style>>
