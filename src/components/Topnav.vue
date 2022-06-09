<template>
<div>
    <div class="topnav bg-light ">
        <div class="container h-100">
            <ul class="nav">
                <li class="nav-item">
                    <router-link to="/products" class="nav-link pl-0" >SẢN PHẨM</router-link>
                    <div class="nav-item-list">
                        <div class="wrapper">
                            <ul class="text-left">
                                <li class="mt-2">
                                    <router-link to="/tt">Tẩy trang</router-link> 
                                </li>
                                <li class="mt-2">Sữa rửa mặt</li>
                                <li class="mt-2">
                                    <router-link to='/toner'>Toner</router-link> 
                                </li>
                                <li class="mt-2">Tẩy tế bào chết</li>
                                <li class="mt-2">Serum- Tinh chất</li>
                                <li class="mt-2">Dưỡng ẩm</li>
                                <li class="mt-2 mb-2">Kem chống nắng</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">THƯƠNG HIỆU</a>
                    <div class="nav-item-list">
                        <div class="wrapper">
                            <ul class="text-left">
                                <li class="mt-2">
                                    <router-link to="/cosrx">Cosrx</router-link> 
                                </li>
                                <li class="mt-2">
                                    <router-link to="/cerave"> Cerave</router-link> 
                                </li>
                                <li class="mt-2">Hada Lapo</li>
                                <li class="mt-2">Innisfree</li>
                                <li class="mt-2">Klairs</li>
                                <li class="mt-2">La Roche-Posay</li>
                                <li class="mt-2">
                                    <a href="">Obagi</a> 
                                </li>
                                <li class="mt-2">
                                    <a href="">Pond's</a> 
                                </li>
                                <li class="mt-2">
                                    <a href="">Senka</a> 
                                </li>
                                <li class="mt-2 mb-2">Khác</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="nav-item">
                    <router-link to="/voucher" class="nav-link" >MÃ GIẢM GIÁ</router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">SẢN PHẨM MỚI</a>
                </li>
            </ul>
        </div>

    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss" >
.topnav{
    margin-top: 3.5rem;
    box-shadow: 0 4px 8px 0 rgb(219, 219, 219);
    border-top:1px solid #ccc ;
    padding-top: 0px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
}
.nav-item {
    position: relative;
}
.pl-0 {
    padding-left: 0;
}
a {
    color: rgb(85, 84, 84);
    text-decoration: none;
}
.text-left {
    text-align: left;
    list-style: none;
}
.nav-item-list {
    width: 15rem;
    position: absolute;
    top: 100%;
    background-color: #fff;
    left: 0;
    border-top: 1px solid #ccc ;
    box-shadow: 0 4px 10px 0 #ccc;
    display: none;
}
.nav-item:hover .nav-item-list {
    display: block;
}
.nav-link {
    font-size: 13px;
    font-weight: 400;
    font-style: normal;
    color: #1c1b1b;
    transition: color .2s ease-in-out;
    letter-spacing: .2em;
    text-transform: uppercase;
}
</style>>

