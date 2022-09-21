<template>
  <div v-if="isOpen" class="popup-mask" @touchmove.prevent @mousewheel.prevent @click.self="close">
    <div class="popup-content" :class="animationClass" :style="popupStyle">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'PopUp',
  props: {
    isShowMask: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'center'
    }
  },
  data () {
    return {
      isOpen: false,
      animationClass: ''
    }
  },
  computed: {
    popupStyle () {
      if (this.position === 'bottom') {
        return 'bottom:0;left:50%;transform:translateX(-50%);'
      } else if (this.position === 'top') {
        return 'top:0;left:50%;transform:translateX(-50%);'
      } else {
        return 'top:50%;left:50%;transform:translate(-50%,-50%)'
      }
    }
  },
  methods: {
    open () {
      this.bindClass('in')
      this.isOpen = true
    },
    close () {
      this.bindClass('out')
      setTimeout(() => {
        this.isOpen = false
      }, 300)
    },
    bindClass (type) {
      let className = ''
      if (this.position === 'bottom') {
        className = 'slideUp'
      } else if (this.position === 'top') {
        className = 'slideDown'
      } else {
        className = 'fade'
      }
      if (type === 'in') {
        className += '-in'
      } else {
        className += '-out'
      }
      this.animationClass = className
    }
  }
}
</script>
<style lang="scss" scoped>
/*fade效果*/
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.fade-in {
  transform-origin: center center;
  animation-name: fade-in;
  animation-duration: .3s;
  animation-timing-function: linear;
}
.fade-out {
  transform-origin: center center;
  animation-name: fade-out;
  animation-duration: .3s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}

/*slideUp*/
@keyframes slideUp-in {
  0% {
    transform: translate(-50%, 100%);
  }
  100% {
    transform: translate(-50%, 0);
  }
}
@keyframes slideUp-out {
  0% {
    transform: translate(-50%, 0%);
  }
  100% {
    transform: translate(-50%, 100%);
  }
}
.slideUp-in {
  animation-name: slideUp-in;
  animation-duration: .3s;
  animation-timing-function: linear;
}
.slideUp-out {
  animation-name: slideUp-out;
  animation-duration: .3s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}

/*slideDown效果*/
@keyframes slideDown-in {
  0% {
    transform: translate(-50%, -100%);
  }
  100% {
    transform: translate(-50%, 0);
  }
}
@keyframes slideDown-out {
  0% {
    transform: translate(-50%, 0%);
  }
  100% {
    transform: translate(-50%, -100%);
  }
}
.slideDown-in {
  animation-name: slideDown-in;
  animation-duration: .3s;
  animation-timing-function: linear;
}
.slideDown-out {
  animation-name: slideDown-out;
  animation-duration: .3s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}

.popup-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.2);
    z-index: 9999;
    overflow: hidden;
    // pointer-events: none;

    .popup-content {
      position: fixed;
    }
}
</style>
