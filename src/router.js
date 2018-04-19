import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import SelectCourse from '@/components/SelectCourse'
import Courses from '@/components/Courses'
import Login from '@/components/Login'
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
      path: '/',
      name: 'Login',
      component: Login
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
