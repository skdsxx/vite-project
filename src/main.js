import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from './statics/axios';
import store from './store/index';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

//createApp(App).mount('#app')
const app = createApp(App)
//全局配置axios
app.config.globalProperties.$http=axios;
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')
