import axios from 'axios';

axios.defaults.timeout = 5000;
axios.defaults.baseURL = '/api';

axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.headers.common['Authorization'] = 'Bearer ' + token;
  return config;
})


//http response 拦截器
axios.interceptors.response.use(
  response => {
    if(response.data.errCode ==2){
      // router.push({
      //   path:"/login",
      //   querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
      // })
    }
    return response;
  },
  error => {
    console.log('xxx', error.response.status)
    if(error.response.status === 401){
      console.log('请重新登录')
      // Router.push({
      //   path:"/login"
      // })
    }
    return Promise.reject(error)
  }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url,params={}){
  return new Promise((resolve,reject) => {
    axios.get(url,{
      params:params
    })
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err)
    })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

 export function post(url,data = {}){
   console.log(url, 'ddd')
   return new Promise((resolve,reject) => {
     axios.post('article-list',{
      "username": "李瑞钢",
      "passwd": "123456"
    })
          .then(response => {
            resolve(response.data);
          },err => {
            reject(err)
          })
   })
 }

 /**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.patch(url,data)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
  })
}

 /**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.put(url,data)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
  })
}