import qs from 'qs'
import MD5 from './md5'

// 获取url参数
const GetRequest = (urlStr) => {
  const url = urlStr.split('?')[0]
  const query = urlStr.split('?')[1]
  const theRequest = {}
  if (query) {
    let strs = query
    strs = strs.split('&')
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = decodeURI(strs[i].split('=')[1])
    }
  }
  return { url, query: theRequest }
}

// 生成签名
const makeSign = (params) => {
  const newObj = params || {}
  newObj.t = parseInt(Date.now() / 1000)
  const parr = []
  let keys
  for (const k in (keys = Object.keys(newObj).sort())) {
    if (keys[k] !== 'sign') {
      parr.push(keys[k] + '=' + newObj[keys[k]])
    }
  }
  parr.push('appkey=yZXBV5LVtNU3BrTxB1VQqFqn4KLjSux')
  const str = parr.join('&')
  const sign = MD5(str).toUpperCase()
  newObj.sign = sign
  return newObj
}

export default ({ $axios, redirect }) => {
  // 基本配置
  $axios.defaults.timeout = 10000

  // 请求拦截器
  $axios.onRequest((config) => {
    if (process.env.NODE_ENV === 'development') {
      // dev环境 +/api前缀走代理
      config.baseURL = '/api'
    } else {
      // generate
      config.baseURL = ''
    }

    if (config.method === 'get') {
      const HANDLED_OBJ = GetRequest(config.url)
      if (HANDLED_OBJ.query) {
        // 有参数
        config.url = `${HANDLED_OBJ.url}?${qs.stringify(makeSign(HANDLED_OBJ.query))}`
      } else {
        // 无参数
        config.url = `${config.url}?${qs.stringify(makeSign())}`
      }
    }
    return config
  })

  // 响应拦截器
  $axios.onResponse((resp) => {
    return Promise.resolve(resp.data.data)
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 404 || code === 500) {
      redirect('/error')
    }

    return Promise.reject(error)
  })
}
