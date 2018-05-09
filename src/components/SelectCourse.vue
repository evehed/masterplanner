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
        </div>
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

  // props: ['yourCourses4', 'yourCourses5'],
  // watch: {
  //       yourCourses4: function(newVal, oldVal) { // watch it
  //         this.displayCourses('4')
  //       },
  //       yourCourses5: function(newVal, oldVal) { // watch it
  //         this.displayCourses('5')
  //       }
  //     },


  components: {
    'courses': Courses,
    'progressbar': ProgressBar,
  },
  data () {
    return {
      year: '4',
      yourCourses4: [],
      yourCourses5: [],
      status: 'INITIAL',
      currentUser: firebase.auth().currentUser.uid,
      emailaddress: null,

    }
  },

  mounted() {
    // when data is retrieved we update it's properties
    // this will cause the component to re-render
    this.emailaddress = firebase.auth().currentUser.email;
    this.displayCourses();
  },
  methods: {

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
              //for(yc in _this.yourCourses4){
               console.log("removeindex: "+index)
                // if (_this.yourCourses4[yc].data().id =del.id){
                //    _this.yourCourses4.splice(yc, 1);
                // }
            //  }
              //_this. displayCourses()
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
              //var removeIndex = _this.yourCourses5.indexOf(doc.id)
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
    addYear4: function(c){
      firebase.firestore().doc('users/'+ this.currentUser).collection('year4').add(c)
      this.yourCourses4.push(c);

      //this.displayCourses('4');
    },
    addYear5: function(c){
      firebase.firestore().doc('users/'+ this.currentUser).collection('year5').add(c)
      this.yourCourses5.push(c);
      //this.displayCourses('5');
    },
    changeYear: function(y){
      this.year = y;
      console.log("new year : "+this.year)
    },

    displayCourses: function(){
      var _this = this
        _this.yourCourses4 = [];
        firebase.firestore().doc('users/'+ this.currentUser).collection('year4').get()
          .then(function(coursesDB) {
            coursesDB.forEach(function(doc) {
              _this.yourCourses4.push(doc.data());
              //console.log(doc.data());
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

