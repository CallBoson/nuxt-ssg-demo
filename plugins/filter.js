import Vue from 'vue'

const OBJ = {
  // 开发版
  develop: 'https://build-1305866201.cos.ap-guangzhou.myqcloud.com/img/official/',
  // 正式版
  release: 'https://build-1305866201.file.myqcloud.com/img/official/'
}

// 图片地址
Vue.filter('imgHost', (value) => {
  if (process.env.NODE_ENV === 'development') {
    return OBJ.develop + value
  } else {
    return OBJ.release + value
  }
})

Vue.filter('bgHost', (value) => {
  if (process.env.NODE_ENV === 'development') {
    return `backgroundImage: url('${OBJ.develop + value}');`
  } else {
    return `backgroundImage: url('${OBJ.release + value}');`
  }
})
