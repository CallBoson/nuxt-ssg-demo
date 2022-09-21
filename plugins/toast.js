import Toast from '@/components/CommonToast.vue'

const obj = {}
obj.install = (Vue) => {
  // 1.组件构造器
  const ToastConstructor = Vue.extend(Toast)

  // 2.组件对象
  const toast = new ToastConstructor()

  // 3.挂载创建div节点
  toast.$mount(document.createElement('div'))

  // 4.body上增加toast
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = (text, duration = 1500) => {
    toast.show(text, duration)
  }
}

export default obj
