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
        <!-- Child components: listen for events -->
        <progressbar :yourCourses4 = "yourCourses4" :yourCourses5 = "yourCourses5" :year="year" @delete-course="deleteCourse($event)" @change-year-to="changeYear($event)"/> <!--v-on:delete-course="deleteCourse($event)" -->
        <courses v-on:add-year4="addYear4($event)" v-on:add-year5="addYear5($event)" />
      </div>
  </div>
  </div>
</template>

<script>

import Courses from "@/components/Courses"
import ProgressBar from "@/components/ProgressBar"
import firebase from "firebase"

export default {
//Creates child components
  components: {
    'courses': Courses,
    'progressbar': ProgressBar,

  },
//Creates the data that will be used
  data () {
    return {
      year: '4',
      yourCourses4: [],
      yourCourses5: [],
    //  status: 'INITIAL',
      currentUser: firebase.auth().currentUser.uid,
      emailaddress: null,
    }
  },

//When the page render
  mounted() {
    this.emailaddress = firebase.auth().currentUser.email;
    this.displayCourses();
  },

  methods: {
//Delete the course from both firebase and from yourCourses-array
    deleteCourse: function(del){
      console.log("kursen som ska deleteas är: "+del.id)
      console.log("år: "+ this.year);

      var _this = this

      if(this.year == '4'){
        firebase.firestore().doc('users/'+ _this.currentUser).collection('year4').get()
        .then(function(coursesDB) {
          coursesDB.forEach(function(doc) {
            if(doc.data().id == del.id){
              firebase.firestore().doc('users/'+ _this.currentUser).collection('year4').doc(doc.id).delete();
              var index = _this.yourCourses4.findIndex(function(c) {
                return c.id == del.id
              })
              _this.yourCourses4.splice(index, 1);
               console.log("removeindex: "+index)

            }
          })
        })
      }
      else{
        firebase.firestore().doc('users/'+ _this.currentUser).collection('year5').get()
        .then(function(coursesDB) {
          coursesDB.forEach(function(doc) {
            if(doc.data().id == del.id){
              firebase.firestore().doc('users/'+ _this.currentUser).collection('year5').doc(doc.id).delete();
              var index = _this.yourCourses5.findIndex(function(c) {
                return c.id == del.id
              })
              _this.yourCourses5.splice(index, 1);
                  console.log("removeindex: "+index)
            }
          })
        })
      }
    },
//Add course to collection 'year4' in firebase and to yourCourses-array
    addYear4: function(c){
      firebase.firestore().doc('users/'+ this.currentUser).collection('year4').add(c)
      this.yourCourses4.push(c);
    },
//Add course to collection 'year5' in firebase and to yourCourses-array
    addYear5: function(c){
      firebase.firestore().doc('users/'+ this.currentUser).collection('year5').add(c)
      this.yourCourses5.push(c);
    },
//Change the year in progressbar
    changeYear: function(y){
      this.year = y;
    },
//Is called upon when page is mounted
    displayCourses: function(){
      var _this = this
        _this.yourCourses4 = [];
        firebase.firestore().doc('users/'+ this.currentUser).collection('year4').get()
          .then(function(coursesDB) {
            coursesDB.forEach(function(doc) {
              _this.yourCourses4.push(doc.data());
            })
          })
        _this.yourCourses5 = [];
        firebase.firestore().doc('users/'+ this.currentUser).collection('year5').get()
        .then(function(coursesDB) {
          coursesDB.forEach(function(doc) {
            _this.yourCourses5.push(doc.data());
          })
        })
    },
//Log ut the user from firebaseAuth 
    logout: function() {
     firebase.auth().signOut().then(() => {
       this.$router.replace('/')
     })
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

#loggedout {
  width: 70%;
  cursor: pointer;
  border-radius: 10px;
  opacity: 0.7;
}

</style>
