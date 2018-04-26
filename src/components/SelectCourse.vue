<template>
  <div class="thumbnail">
    <div class="row">
      <div class="col-sm-12">
        <div class="col-sm-10">
          <p id="Select">SelectCourse</p>
        </div>
        <div class="col-sm-2">
          <br>
          <p id="loggedin">Logged in as: {{emailaddress}}</p>
        </div>
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
import firebase from "firebase"



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
    this.emailaddress = firebase.auth().currentUser.email;

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

#Select {
  font-size: 40pt;
}

#loggedin {
  font-size: 15pt;
}

</style>
