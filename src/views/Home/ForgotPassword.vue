<template>
    <div class="forgot-pass">
        <div class="container">
            <div class="row">
                <div class="col-md-6 offset-md-3 col-xs-12 ">
                    <form>
                        <h3>Quên mật khẩu</h3>

                        <div class="form-group">
                            <label>Email address</label>
                            <input type="email" class="form-control form-control-lg" />
                        </div>

                        <button type="submit" class="btn btn-dark btn-lg btn-block mt-3">Reset password</button>

                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>
<style lang="scss" scoped>
.forgot-pass {
    margin-top: 10rem;
}
</style>>