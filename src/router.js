import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import SelectCourse from '@/components/SelectCourse'
import Courses from '@/components/Courses'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
//import firebase from '@/components/firebaseInit.js'
import { courseInstance } from "@/data/CourseModel";
import firebase from "firebase";

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/search',
      name: 'SelectCourse',
      component: SelectCourse,
      props: { model: courseInstance }
    },
    {
      path: '/search',
      name: 'Courses',
      component: Courses,
      props: { model: courseInstance }
    },

  ]
})

// router.beforeEach((to, from, next) => {
//   let currUser = firebase.auth().currentUser
//   let requireAuth = to.matched.some(record => record.meta.requiresAuth);
//   if (requireAuth && !currUser) next('login')
//   else if (!requireAuth && currUser) next('search')
//   else next()
// })
