import {createRouter,createWebHashHistory} from 'vue-router'
// 1. 定义路由组件， 注意，这里一定要使用 文件的全名（包含文件后缀名）
import login from "../views/login/login.vue";
import homePage from "../views/home/homePage.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
            path: "/",
            name: "index",
            redirect:"login"
        },
        {
            path:"/login",
            component:login
        },
        {
            path:"/homepage",
            component:homePage
        }
    ]
})
//注意： 在.vue组件中如果需要使用router,则需要导入useRouter这个方法，需要使用route,则需要导入，useRoute这个方法
export default router;