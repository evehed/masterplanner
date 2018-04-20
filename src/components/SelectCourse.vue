<template>
  <div class="thumbnail">
    <div class="row">
      <div class="col-sm-12">
        <p>SelectCourse</p>
        <progressbar :model = "this.model"/>
        <courses :model = "this.model"/>
      </div>
  </div>
  </div>
</template>

<script>

//import db from './firebaseInit';
import Courses from "@/components/Courses"
import ProgressBar from "@/components/ProgressBar"



export default {
  props: ['model'],

  components: {
    'courses': Courses,
    'progressbar': ProgressBar,

  },
  data () {
    return {
      firstname: null,
      lastname: null,
      emailaddress: null,
      phonenumber: null,
      text: null,
      status: 'INITIAL',


    }
  },
  mounted() {
    // when data is retrieved we update it's properties
    // this will cause the component to re-render

  },

  methods: {
    writeSomething (){
      db.collection('text').add({
        text: this.text
      })
      console.log("hejsaan");

    },

  }
}
</script>

<style scoped>

p {
  font-size: 40pt;
}

</style>
