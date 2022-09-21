import AOS from 'aos'
import 'aos/dist/aos.css'
import Vue from 'vue'
import Vconsole from 'vconsole'
import toast from './toast'

// AOS动画 https://github.com/michalsnik/aos#animations
AOS.init({
  disable: screen.width < 640,
  mirror: false,
  once: true
})

// vconsole
if (process.env.NODE_ENV === 'development') {
  const vc = new Vconsole()
  Vue.use(vc)
}

// 全局挂载toast
Vue.use(toast)

Vue.prototype.$isMobile = window.innerWidth < 1200
