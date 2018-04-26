import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import SelectCourse from '@/components/SelectCourse'
import Courses from '@/components/Courses'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Showcourse from '@/components/Showcourse.vue'

//import firebase from '@/components/firebaseInit.js'
import { courseInstance } from "@/data/CourseModel";

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Welcome',
    //   component: Welcome
    // },
    {
      path: '/showcourse',
      name: 'Showcourse',
      component: Showcourse
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Login',
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
