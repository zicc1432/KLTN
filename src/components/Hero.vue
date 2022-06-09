<template>
    <div class="hero">
        <div class="container h-100">
                <section class="carousel">
                    <div id="heroControls" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#heroControls" class="active" data-slide-to="0"></li>
                        <li data-target="#heroControls" data-slide-to="1"></li>
                        <li data-target="#heroControls" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img class="img-fluid" src="/img/images/banner3.jpg" alt="First slide">
                        </div>
                        <div class="carousel-item">
                        <img class="img-fluid" src="/img/images/banner2.jpg" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                        <img class="img-fluid" src="/img/images/banner1.jpg" alt="Third slide">
                        </div>
                    </div>
                    </div>
                </section>
                        </div>
    </div>
</template>

<script>
export default {
    name: "hero",
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hero{
    width: 100%;
    height: 500px;
    text-align: left;
    margin-top: 8rem;
}
.hero-intro {
    text-align: justify;
    font-family: 'Segoe UI', sans-serif;
}
.img-hero {
    width: 759px;
    height: auto;
}
ol.carousel-indicators li {
  background-color: white;
  height: 20px;
  width: 20px;
  border-radius: 30px;
  border: 0.6px solid black;
}
ol.carousel-indicators li.active {
  background: #dbf0fa;
}
</style>
