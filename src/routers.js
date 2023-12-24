import {createRouter,createWebHistory} from 'vue-router'
import Home from './components/Home.vue'
import signUp from './components/signup.vue'
import LogIn from './components/login.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'
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
    },
    {
        name: 'Add',
        component:Add,
        path:'/add'
    },
    {
        name: 'Update',
        component:Update,
        path:'/update/:id'
    }
]

const router = createRouter({history:createWebHistory(), routes})
export default router;