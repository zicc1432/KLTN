<template>
  <div>
    <nav class=" nav navbar navbar-expand-lg navbar-light bg-light">
        <div class=" container container-fluid">
            <a class="navbar-brand" href="/">Beauty Shop</a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" >Trang chủ |</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link" >About Your Skin</router-link>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Tìm kiếm sản phẩm..." aria-label="Search">
                    <!-- <button class="btn " type="submit">Search</button> -->
                        <router-link to="/login" class="nav-link nav-log" >ĐĂNGNHẬP</router-link>
                    
                    
                        <!-- <router-link to="/register" class="nav-link nav-log" >Register</router-link> -->
                    <router-link to='/cart' class="nav-log cart">
                        <i class="fas fa-shopping-cart fa-lg"></i>
                    </router-link>
                    <p class="nav-log">({{total}})</p>
                    
                </form>
            </div>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
      total () {
            return this.$store.getters.quantityTotal
        },
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
}
.navbar-brand {
    font-size: 25px;
    font-weight: 400;
    font-style: normal;
    color: #1c1b1b;
    transition: color .2s ease-in-out;
    letter-spacing: .1em;
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
.nav-log {
    // text-decoration: none;
    color: rgb(87, 85, 85);
    margin: auto 0.5rem ;
}

</style>
