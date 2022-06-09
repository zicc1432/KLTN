<template>
<div>
    <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12 ">
            <h2 class="text-left">Đăng ký tài khoản</h2>
            <form>
                <fieldset class="form-group mt-4">
                <p class="text-left">Tên</p>
                <input
                    class="form-control form-control-lg mb-3"
                    type="text"
                    placeholder="Tên của bạn"
                    v-model="userName"
                />
                </fieldset>
                <fieldset class="form-group">
                <p class="text-left">Email</p>
                <input
                    class="form-control form-control-lg mb-3"
                    type="text"
                    placeholder="Nhập Email của bạn"
                    v-model="email"
                />
                </fieldset>
                <fieldset class="form-group">
                <p class="text-left">Mật khẩu</p>
                <input
                    class="form-control form-control-lg mb-3"
                    type="password"
                    placeholder="Mật khẩu tối thiểu có 6 ký tự"
                    v-model="password"
                />
                </fieldset>
                <p class="text-right">
                <router-link to="/login">Đã có tài khoản?</router-link>
                </p>
                <button
                class="btn btn-lg form-control btn-blue"
                >
                Đăng ký ngay
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
  name: 'Signup',
  data() {
      return {
          userName: null,
          email: null,
          password: null,
          passwordConfirm: null
      }
  },
  methods : {
    async signup(e) {
      e.preventDefault();
      if (this.password === this.passwordConfirm) {
        const user = {
          email: this.email,
          firstName: this.firstName,
          lastName: this.lastName,
          password: this.password
        }

        await axios({
          method : 'post',
          url : this.baseURL + "user/signup",
          data : JSON.stringify(user),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
          this.$router.replace("/");
          swal({
            text: "User signup successful. Please Login",
            icon: "success",
            closeOnClickOutside: false,
          });
        })
        .catch(err => {
          console.log(err);
        });
      } else {
        swal({
          text: "Error! Passwords are not matching",
          icon: "error",
          closeOnClickOutside: false,
        });
      }
    }
  }
}
</script>

<style scoped>
.auth-page {
    margin-top: 10rem;
}
.btn-blue {
    background-color: lightskyblue;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
</style>