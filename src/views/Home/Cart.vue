<template>
<div class="card container">
    <div class="row">
        <div class="col-md-8 cart">
            <div class="title">
                <div class="row">
                    <div class="col text-left">
                        <h5><b >Giỏ hàng</b></h5>
                    </div>
                    <div class="col align-self-center text-right text-muted"></div>
                </div>
            </div>
            <!-- San pham trong gio hang -->
            <div v-for="product in products" :key="product.id" class="row border-top border-bottom">
                <div class="row main align-items-center">
                    <div class="col-2">
                        <img :src="`${product.img}`" :alt="`${product.name}`" class="img-fluid">
                    </div>
                    <div class="col">
                        <div class="row text-muted">{{product.title}}</div>
                        <div class="row">{{product.name}}</div>
                    </div>
                    <div class="col"> 
                        <button @click="decrement">-</button> 
                        <button class="border">{{product.quantity}}</button>
                        <button @click="increment">+</button> </div>
                    <div class="col">{{product.price}}
                        <!-- <span class="close">&#10005;</span> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 summary">
            <div>
                <h5><b>Hóa đơn của bạn</b></h5>
            </div>
            <div class="row items border-top pt-3 mb-3">
                <div class="col" style="padding-left:0;">Tạm tính</div>
                <div class="col text-right"> {{total}}.000</div>
            </div>
            <form>
                <div class="row mb-3 mr-3">
                    <p class="col-4 ">Vận chuyển</p> 
                    <select class="col-8 shipping mb-3">
                        <option class="text-muted ">Giao hàng nhanh 0.000</option>
                        <option class="text-muted ">Giao hàng tiết kiệm 0.000</option>

                    </select>
                </div>
                <div class="row mb-3 mr-3">
                    <p class="col-4">Mã giảm giá</p> 
                    <input class="col-8" id="code" placeholder="Enter your code" value="">
                </div>
            </form>
            <div class="row items border-top pt-3 mb-3">
                <div class="col" style="padding-left:0;">Giảm giá</div>
                <div class="col text-right">{{priceSale}}.000</div>
            </div>
            <div class="row items border-top pt-3 mb-3">
                <div class="col" style="padding-left:0;">Tổng tiền</div>
                <div class="col text-right">{{total}}.000</div>
            </div> 
            <router-link to='/pay' class="btn btn-checkout">Tiến hành đặt hàng</router-link>
        </div>
    </div>
</div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'

export default {
    data() {
        return {
            priceSale
        }
    },
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

<style>
.card {
    margin-top: 8rem;
    border: none;
}
.summary {
    text-align: left;
    padding-left: 2rem;
}
.items {
    margin: 0;
}
.mb-3 {
    margin-bottom: 1rem;
}
.mr-3 {
    margin-right: 12px;
}
.btn-checkout {
    width: 100%;
    background-color: #bde0fe;
    border: 1px solid rgb(156, 156, 156);
}
.text-left{
    text-align: left;
}
.text-right {
    text-align: right;
}
.shipping {
    height: 2.5rem;
}
</style>