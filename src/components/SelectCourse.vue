<template>
  <div class="thumbnail">
    <div class="row">
      <div class="col-sm-12">
        <div class="col-sm-10">
          <p id="Select">Select Course</p>
        </div>
        <div class="col-sm-2">
          <br>
          <p id="loggedin">Logged in as: {{emailaddress}}</p>
          <button v-on:click="logout" type="button" id="loggedout" class="btn-md btn-warning">Log Out</button>
          <div> 
            <br>
          </div>
        </div>
        <progressbar :model = "this.courses" :updateProgressbar4 = "this.updateProgressbar4" :updateProgressbar5 = "this.updateProgressbar5"/>
        <courses :updateProgressbar5 = "this.updateProgressbar5" :updateProgressbar4 = "this.updateProgressbar4"/>
      </div>
  </div>
  </div>
</template>

<script>
import Courses from "@/components/Courses"
import ProgressBar from "@/components/ProgressBar"
import firebase from "firebase"
export default {
  props: ['progressbar'],
  components: {
    'courses': Courses,
    'progressbar': ProgressBar,
  },
  data () {
    return {
      emailaddress: null,
      status: 'INITIAL',
    }
  },
  mounted() {
    // when data is retrieved we update it's properties
    // this will cause the component to re-render
    this.emailaddress = firebase.auth().currentUser.email;

  },
  methods: {
    updateProgressbar4(){
      var _this = this
      var Courses4 = []
      firebase.firestore().doc('users/'+ this.currentUser).collection('year4').get()
      .then(function(coursesDB) {
        coursesDB.forEach(function(doc) {
          Courses4.push(doc.data());
        })
        console.log(Courses4)
        return Courses4
      })
    },
    updateProgressbar5(){
      var _this = this
      var Courses5 = []
      firebase.firestore().doc('users/'+ this.currentUser).collection('year5').get()
      .then(function(coursesDB) {
        coursesDB.forEach(function(doc) {
        Courses5.push(doc.data());
        })
        console.log(Courses5)
        return Courses5
      })
    },
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