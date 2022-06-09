<template>
<div>
    <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12 ">
          <h1 class="text-left">Đăng nhập</h1>

          <form>
            <fieldset class="form-group mt-4">
              <p class="text-left">Email</p>
              <input
                class="form-control form-control-lg mb-3"
                type="text"
                placeholder="Email"
                v-model="email"
              />
            </fieldset>
            <fieldset class="form-group">
              <p class="text-left">Mật khẩu</p>
              <input
                class="form-control form-control-lg mb-3"
                type="password"
                placeholder="Password"
                v-model="password"
              />
            </fieldset>
            <div class="row">
              <p class="col text-left">
                <router-link to="/forgot-password">Quên mật khẩu?</router-link>
              </p>
              <p class="col text-right">
                <router-link to="/register">Chưa có tài khoản?</router-link>
              </p>
            </div>
            
            <button
              class="btn btn-lg btn-login"
              @click.prevent="login"
            >
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
}
</script>

<style scoped>
.auth-page {
    margin-top: 10rem;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
.btn-login {
  width: 100%;
  background-color: lightskyblue;
}
</style>