<template>
  <div id="app">
    <Navbar></Navbar>
    <Topnav/>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      baseURL : "http://remotedevs.org:8080//api/"
    }
  }
  // rest of the code block
}
</script>


<style lang="scss">
#app {
  font-family: Harmonia Sans,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

a {
    text-decoration: none !important;
    color: rgb(48, 48, 48) !important;
}
.name-brand {
    font-family: SVN-brandontext-bold,sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #000;
    margin: 0 0 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
}
.name-product {
  font-family: SVN-brandontext-bold,sans-serif;
  font-size: 24px;
  color: #000;
  margin: 0 0 11px;
  letter-spacing: 2px;
}
</style>
