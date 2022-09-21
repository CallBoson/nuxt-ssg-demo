<template>
  <transition name="fade">
    <div v-if="isShow" class="toast-container">
      {{ msg }}
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CommonToast',
  data () {
    return {
      msg: '',
      isShow: false
    }
  },
  methods: {
    show (text, duration) {
      this.msg = text
      this.isShow = true
      setTimeout(() => {
        this.isShow = false
      }, duration || 1500)
    }
  }
}
</script>

<style lang="scss" scoped>
.toast-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    background-color: rgba(0,0,0,.8);
    color: #FFF;
    font-size: 14px;
    width: 215px;
    text-align: center;
    padding: 5px 15px;
    z-index: 10000;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
