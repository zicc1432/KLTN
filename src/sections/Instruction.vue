<template>
    <div class="instruct mt-5">
        <div class="container h-100">
            <div class="row h-100 justify-content-center align-items-center">
                <div class="col-md-6">
                    <router-link to='/' class="left">
                        <p class="top">
                            Tìm hiểu ngay!
                        </p>
                        <span class="title">
                            <p>BÍ QUYẾT</p>
                            <p>CHĂM SÓC DA ĐÚNG CÁCH</p>
                            <p>CÙNG BEAUTY SHOP</p>
                        </span>
                    </router-link>
                    
                </div>
                <div class="col-md-6">
                    <div class="graphic">
                        <img class="img-instruct" src="/img/images/instr.jpg" alt="image">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Instruct",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.instruct{
    width: 100%;
    height: 400px;
    text-align: left;
    background-color: rgb(250, 217, 226);
}
.hero-intro {
    text-align: justify;
    font-family: 'Segoe UI', sans-serif;
}
.img-instruct {
    width: 100%;
    height: auto;
}
.left {
    margin: auto;
    text-align: center;
}
.top {
    font-size: 1.3rem;
    font-weight: bold;
}
.title {
    font-size: 2rem;
    font-weight: bold;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
