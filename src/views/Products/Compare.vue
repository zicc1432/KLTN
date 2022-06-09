<template>
<div class="compare">
    <div class="container mt-5">
        <div class="row">
            <h3 class="mt-9 mb-3">So sánh chi tiết</h3>
        </div>
        <div class="row">
            <div class="col-md-4">
                <h5 class="name_prd">Srm Innisfree Green Tea Cleansing Foam</h5>
                <img  class="row main_image mt-5" src="/img/product/srm/srm1.jpg" id="main_product_image" width="520px" height="482px"> 
                <!-- <span class="sale">-20%</span> -->
                <!-- </div> -->
                <div class="thumbnail_images">
                    <ul id="thumbnail" class="row mt-5 w-100">
                        <li class="col-md-3 image-item"><img onclick="changeImage(this)" src="/img/product/srm/srm1.jpg" height="110px"></li>
                        <li class="col-md-3 image-item"><img onclick="changeImage(this)" src="/img/product/srm/srm1.1.jpg" height="110px"></li>
                        <li class="col-md-3 image-item"><img onclick="changeImage(this)" src="/img/product/srm/srm1.2.jpg" height="110px"></li>
            
                    </ul>
                </div>
                <button class="btn-addcart">Mua ngay</button>
            </div>
            <div class="col-md-4">
                <h5 class="name_prd">Srm Innisfree Jeju Cherry Blossom</h5>
                <img  class="row main_image mt-5 " src="/img/product/srm/srm2.jpg" id="main_product_image1" width="520px" height="482px"> 
                <!-- <span class="sale">-20%</span> -->
                <!-- </div> -->
                <div class="thumbnail_images">
                    <ul id="thumbnail" class="row mt-5 w-100">
                        <li class="col-md-3 image-item"><img onclick="changeImage1(this)" src="/img/product/srm/srm2.jpg" height="110px"></li>
                        <li class="col-md-3 image-item"><img onclick="changeImage1(this)" src="/img/product/srm/srm2.1.jpg" height="110px"></li>
                        <li class="col-md-3 image-item"><img onclick="changeImage1(this)" src="/img/product/srm/srm2.2.jpg" height="110px"></li>
                    </ul>
                </div>
                <button class="btn-addcart">Mua ngay</button>
            </div>
        </div>
        <div class="row">
            <table>
                <thead>
                    <tr>
                        <th class="row_title">Thông tin chi tiết</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="row_title">Giá tiền</td>
                        <td class="row_product0">120.000 đ</td>
                        <td class="row_product1">150.000 đ</td>
                        <td class="row_product2"></td>
                    </tr>
                    <tr>
                        <td class="row_title">Thành phần</td>
                        <td class="row_product0">Chiết xuất từ 100% trà xanh nguyên chất được nuôi dưỡng từ trong lòng đất có chứa các chất Linoleic Acid, Catechin, Vitamin E và các chất khoán</td>
                        <td class="row_product1">Chứa các thành phần lấy từ một loại đá núi lửa tự nhiên, chiết xuất trà xanh và nước khoáng</td>
                        <td class="row_product2"></td>
                    </tr>
                    <tr>
                        <td class="row_title">Loại da phù hợp</td>
                        <td class="row_product0">Da thường</td>
                        <td class="row_product1">Da khô thiên dầu</td>
                        <td class="row_product2"></td>
                    </tr>
                    <tr>
                        <td class="row_title">Tác dụng</td>
                        <td class="row_product0">Làm sạch bụi bẩn và các tạp chất trên da, hút nhờn và ngăn ngừa những dấu hiệu làm lão hoá da. Kháng khuẩn hạ nhiệt độ da</td>
                        <td class="row_product1">Ngăn ngừa sự tiết dầu nhờn và làm sạch sâu bên trong lỗ chân lông khỏi bụi bẩn, làm giảm thiểu sự phát triển của mụn viêm, mụn trứng cá, nốt sưng tấy trên da mặt…</td>
                        <td class="row_product2"></td>
                    </tr>
                    <tr>
                        <td class="row_title">Thương hiệu</td>
                        <td class="row_product0">Innisfree</td>
                        <td class="row_product1">Innisfree</td>
                        <td class="row_product2"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <Footer/>
</div>
</template>

<script>
import Footer from '../../components/Footer.vue'
export default {
    components: {
        Footer
    }
}
</script>

<style lang="scss" scoped>
.row {
    justify-content: center;
}
.compare {
    background-color: pink;
}
.container {
    background-color: #fff;
}
.mt-9 {
    margin-top: 6rem;
}
.main_image {
    height: 250px;
    width: 350px;
    padding-left: 6rem;
}
li {
    list-style: none;
}
table {
    margin: 2rem 2rem;
}
thead {
    border-bottom: 1.5px solid #ccc;
}
tr {
    line-height: 2em;
    text-align: left;
    border-bottom: 1px solid #ccc;
}
.name_prd {
    
    line-height: 2em;
    border: 1px solid #000;
}
.main_title {
    font-weight: bold;
    font-size: 20px;
}
.btn-addcart {
    background-color: rgb(253, 25, 63);
    width: 30%;
    height: 2rem;
    border: none;
}
.row_title {
    font-weight: bold;
    width: 25%;
}
</style>>
