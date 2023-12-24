import {createRouter,createWebHistory} from 'vue-router'
import Home from './components/Home.vue'
import signUp from './components/signup.vue'
import LogIn from './components/login.vue'
const routes =[
    {
        name: 'Home',
        component:Home,
        path:'/'
    },
    {
        name: 'SignUp',
        component:signUp,
        path:'/signup'
    },
    {
        name: 'Login',
        component:LogIn,
        path:'/login'
    }
]

const router = createRouter({history:createWebHistory(), routes})
export default router;