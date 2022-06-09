<template>
<div class="payment text-left">
    <div class="container wrapper mt-5">   
            <div class="row cart-body">
                <div class="col-md-6">
                    <!--SHIPPING METHOD-->
                    <div class="panel panel-info">
                        <div class="panel-body">
                            <div class="form-group">
                                <div class="col-md-12">
                                    <h4>Địa chỉ giao hàng</h4>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-md-12"><strong>Tỉnh/ Thành phố</strong></div>
                                <div class="col-md-12">
                                    <input type="text" class="form-control" name="country" value="" />
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="span1"></div>
                                <div class="col-md-6 col-xs-12">
                                    <strong>Quận/ Huyện</strong>
                                    <input type="text" name="last_name" class="form-control" value="" />
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-md-12"><strong>Phường/ Xã</strong></div>
                                <div class="col-md-12">
                                    <input type="text" name="address" class="form-control" value="" />
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-md-12"><strong>Địa chỉ cụ thể</strong></div>
                                <div class="col-md-12">
                                    <input type="text" name="city" class="form-control" value="" />
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-md-12"><strong>Tên người nhận</strong></div>
                                <div class="col-md-12">
                                    <input type="text" name="state" class="form-control" value="" />
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <div class="col-md-12"><strong>Số điện thoại</strong></div>
                                <div class="col-md-12"><input type="text" name="phone_number" class="form-control" value="" /></div>
                            </div>
                            <div class="form-group">
                                <div class="col-md-12"><strong>Email</strong></div>
                                <div class="col-md-12"><input type="text" name="email_address" class="form-control" value="" /></div>
                            </div>
                            <div class="form-group mt-3">
                                <div class="col-md-12 d-grid gap-2"><button class="btn btn-color">Xác nhận</button></div>
                            </div>
                        </div>
                    </div>
                    <!--SHIPPING METHOD END-->
                </div>
                <div class="col-md-6 mt-3">
                    <div>
                        <p> <strong>Thông tin đơn hàng</strong> </p> 
                    </div>
                    <!--REVIEW ORDER-->
                    <div v-for="product in products" :key="product.id" class="row border-top border-bottom">
                        <div class="row main align-items-center">
                            <div class="col-2"><img class="img-fluid" :src="`${product.img}`" :alt="`${product.name}`"></div>
                            <div class="col">
                                <div class="row text-muted">{{product.title}}</div>
                                <div class="row">{{product.name}}</div>
                            </div>
                            <div class="col"><button class="border">{{product.quantity}}</button></div>
                            <div class="col">{{product.price}}</div>
                        </div>
                    </div>
                    <div class="row items border-top pt-3 mb-3 total-pay">
                        <div class="col text-left mb-3"><p  style="padding-left:10px;">Tổng tiền</p> </div>
                        <div class="col text-center mb-3"> <p style="padding-left:20px;"> {{total}}.000</p></div>
                    </div> 
                    <!--REVIEW ORDER END-->
                </div>
            </div>

    </div>
</div>
</template>

<script>
export default {
    computed: {
        products () {
            return this.$store.getters.cartProducts
        },
        total () {
            return this.$store.getters.cartTotal
        },

    },
}
</script>

<style lang="scss" scoped>
.payment {
    margin-top: 10rem;
}
.btn-color {
    background-color: rgb(190, 190, 190);
    border: 1px solid #ccc;
}
// .total-pay {
//     background-color: rgb(171, 216, 241);
//     border: 1px solid #ccc;

// }
</style>>

