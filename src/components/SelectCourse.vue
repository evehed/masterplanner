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
          <button v-on:click="logout" type="button" id="loggedout" class="btn-md btn-warning">Log Out</button>
        </div> 
        <progressbar :model = "this.courses"/>
        <courses :progressbar = "this.progressbar"/>
      </div>
  </div>
  </div>
</template>

<script>

//import db from './firebaseInit';
import Courses from "@/components/Courses"
import ProgressBar from "@/components/ProgressBar"
import firebase from 'firebase'



export default {
  props: ['model'],

  components: {
    'courses': Courses,
    'progressbar': ProgressBar,

  },
  data () {
    return {
      status: 'INITIAL',


    }
  },
  mounted() {
    this.emailaddress = firebase.auth().currentUser.email;
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
    logout: function() {
     firebase.auth().signOut().then(() => {
       this.$router.replace('/')
     })
   }

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

#loggedout {
  width: 70%;
  cursor: pointer;
  border-radius: 10px;
  opacity: 0.7;
}

</style>
