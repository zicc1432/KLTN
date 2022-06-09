<template>
  <div class="home">
    <!-- <Topnav/> -->
    <Hero/>
    <Brands/>
    <SaleProducts/>
    <Catalogy/>
    <Instruction/>
    <ProductList/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Topnav from "@/components/Topnav.vue"
import Hero from "@/components/Hero.vue"
import Brands from "@/sections/Brands.vue"
import Catalogy from "@/sections/Catalogy.vue"
import ProductList from "@/sections/ProductList.vue"
import Instruction from '@/sections/Instruction.vue'
import Footer from "@/components/Footer.vue"
import SaleProducts from '@/sections/SaleProducts.vue'



export default {
  name: "Home",
  components: {
    Topnav,
    Hero,
    Brands,
    SaleProducts,
    Catalogy,
    ProductList,
    Instruction,
    Footer
  },
};
</script>

