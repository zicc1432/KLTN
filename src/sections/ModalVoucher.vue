<template>
    <div class="modal">
      <div class="modal-content">
          <img src="/img/images/bsv015.jpg" alt="">
        <p class="modal-btn" @click="close"> X</p>
      </div>
    </div>
</template>

<script>

export default ({
    name: "ModalVoucher",
    methods: {
        close() {
            this.$emit('close')
        }
    }
})
</script>

<style scoped>
.modal {
    background: rgba(0, 0, 0, 0.4);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    /* animation: modalFadeIn ease .5; */
}
.modal-content {
  text-align: center;
  width: 40%;
  height: 300px;
  margin: 80px auto;
  background-color: rgb(255, 255, 255);
}
img {
    margin-top: 40px;
    width: 30rem;
}
.modal-btn {
    width: 80px;
    height: 30px;
    background-color: rgb(89, 136, 238);
    color: #fff;
    cursor: pointer;
}
</style>
