import axios from "axios";
import qs from "qs";
import {ElMessageBox} from 'element-plus';

//post请求头
axios.defaults.headers.post["Content-Type"] ="application/x-www-form-urlencoded;charset=UTF-8";
//设置超时
axios.defaults.timeout = 10000;

axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    if (response.status == 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
      
    //ElMessageBox(JSON.stringify(error), '请求异常', {
       // confirmButtonText: '确定',
        //callback: action => {}
     // });
     console.error(error)
  }
);
export default {
  post(url, data) {
    return new Promise((resolve, reject) => {  
      axios({
          method: 'post',
          url,
          data: data,
        })
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        });
    })
  },
  put(url, data){
    return new Promise((resolve, reject) => {
        axios({
            method: 'put',
            url,
            data: data,
          })
          .then(res => {
            resolve(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
  },
  delete(url,data){
    return new Promise((resolve, reject) => {
        axios({
            method: 'delete',
            url,
            params: data,
          })
          .then(res => {
            resolve(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
  },
  get(url,data) {
    return new Promise((resolve, reject) => {
      axios({
          method: 'get',
          url,
          params: data,
        })
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
};