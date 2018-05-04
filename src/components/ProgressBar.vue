<template>
  <div class="col-sm-3">
    <div class="ProgressBar col-sm-12 center-block">
      <h3>Progressbar</h3>
      <div class="btn-group btn-group-justified">
        <a id="yearBtn4" class="btn btn-warning"  v-on:click="year = true">Year 4</a>
        <a id="yearBtn5" class="btn btn-warning"  v-on:click="year = false">Year 5</a>
      </div>
      <br/>

      <div v-if= "year">
        <div class="p1">
          <div class="col-lg-12">
            <p><strong>Period 1</strong></p>
            <div v-for="courses in yourCourses4" :key="courses.id">
              <div v-if="courses.period == 1">
                <div class="col-lg-10">
                  <td>
                    <h6><strong>{{courses.id}} </strong> {{courses.title}}</h6>
                    <h6> <strong>Credits</strong> {{courses.credits}}</h6>
                  </td>
                  <hr/>
                </div>
                <div class="col-lg-2">
                  <td><span v-on:click="deleteCourse(courses)" class='glyphicon glyphicon-remove' ></span></td>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br>
        <div class="p2">
          <div class="col-lg-12">
            <p><strong>Period 2</strong></p>
            <div v-for="courses in yourCourses4" :key="courses.id">
              <div v-if="courses.period == 2">
                <div class="col-lg-10">
                  <td>
                    <h6><strong>{{courses.id}} </strong> {{courses.title}}</h6>
                    <h6> <strong>Credits</strong> {{courses.credits}}</h6>
                  </td>
                  <hr/>
                </div>
                <div class="col-lg-2">
                  <td><span  v-on:click="deleteCourse(courses)" class='glyphicon glyphicon-remove' ></span></td>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br>
        <div class="p3">
          <div class="col-lg-12">
            <p><strong>Period 3</strong></p>
            <div v-for="courses in yourCourses4" :key="courses.id">
              <div v-if="courses.period == 3">
                <div class="col-lg-10">
                  <td>
                    <h6><strong>{{courses.id}} </strong> {{courses.title}}</h6>
                    <h6> <strong>Credits</strong> {{courses.credits}}</h6>
                  </td>
                  <hr/>
                </div>
                <div class="col-lg-2">
                  <td><span  v-on:click="deleteCourse(courses)" class='glyphicon glyphicon-remove' ></span></td>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br>
        <div class="p4">
          <div class="col-lg-12">
            <p><strong>Period 4</strong></p>
            <div v-for="courses in yourCourses4" :key="courses.id">
              <div v-if="courses.period == 4">
                <div class="col-lg-10">
                  <td>
                    <h6><strong>{{courses.id}} </strong> {{courses.title}}</h6>
                    <h6> <strong>Credits</strong> {{courses.credits}}</h6>
                  </td>
                  <hr/>
                </div>
                <div class="col-lg-2">
                  <td><span  v-on:click="deleteCourse(courses)" class='glyphicon glyphicon-remove' ></span></td>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br><br>
      </div>

      <div v-else>
        <div class="p1">
          <div class="col-lg-12">
            <p><strong>Period 1</strong></p>
            <div v-for="courses in yourCourses5" :key="courses.id">
              <div v-if="courses.period == 1">
                <div class="col-lg-10">
                  <td>
                    <h6><strong>{{courses.id}} </strong> {{courses.title}}</h6>
                    <h6> <strong>Credits</strong> {{courses.credits}}</h6>
                  </td>
                  <hr/>
                </div>
                <div class="col-lg-2">
                  <td><span  v-on:click="deleteCourse(courses)" class='glyphicon glyphicon-remove' ></span></td>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br>
        <div class="p2">
          <div class="col-lg-12">
            <p><strong>Period 2</strong></p>
            <div v-for="courses in yourCourses5" :key="courses.id">
              <div v-if="courses.period == 2">
                <div class="col-lg-10">
                  <td>
                    <h6><strong>{{courses.id}} </strong> {{courses.title}}</h6>
                    <h6> <strong>Credits</strong> {{courses.credits}}</h6>
                  </td>
                  <hr/>
                </div>
                <div class="col-lg-2">
                  <td><span  v-on:click="deleteCourse(courses)" class='glyphicon glyphicon-remove' ></span></td>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br>
        <div class="p3">
          <div class="col-lg-12">
            <p><strong>Period 3</strong></p>
            <div v-for="courses in yourCourses5" :key="courses.id">
              <div v-if="courses.period == 3">
                <div class="col-lg-10">
                  <td>
                    <h6><strong>{{courses.id}} </strong> {{courses.title}}</h6>
                    <h6> <strong>Credits</strong> {{courses.credits}}</h6>
                  </td>
                  <hr/>
                </div>
                <div class="col-lg-2">
                  <td><span  v-on:click="deleteCourse(courses)" class='glyphicon glyphicon-remove' ></span></td>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br>
        <div class="p4">
          <div class="col-lg-12">
            <p><strong>Period 4</strong></p>
            <div v-for="courses in yourCourses5" :key="courses.id">
              <div v-if="courses.period == 4">
                <div class="col-lg-10">
                  <td>
                    <h6><strong>{{courses.id}} </strong> {{courses.title}}</h6>
                    <h6> <strong>Credits</strong> {{courses.credits}}</h6>
                  </td>
                  <hr/>
                </div>
                <div class="col-lg-2">
                  <td><span  v-on:click="deleteCourse(courses)" class='glyphicon glyphicon-remove' ></span></td>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br><br>
        <br><br>
      </div>
    </div>

  </div>
</template>

<script>
// Alternative to passing the moderl as the component property,
// we can import the model instance directly
import firebase from 'firebase';
export default {
  props: ['model'],
  // this methods is called by Vue lifecycle when the
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to call the API and get the data
  mounted() {
    // when data is retrieved we update it's properties
    // this will cause the component to re-render
    var _this = this
    firebase.firestore().doc('users/'+ this.currentUser).collection('year4').get()
    .then(function(coursesDB) {
      coursesDB.forEach(function(doc) {
        _this.yourCourses4.push(doc.data());
        console.log(_this.yourCourses4);
      })
    })
    firebase.firestore().doc('users/'+ this.currentUser).collection('year5').get()
    .then(function(coursesDB) {
      coursesDB.forEach(function(doc) {
        _this.yourCourses5.push(doc.data());
      })
    })
  },
  data() {
    return {
      status: 'INITIAL',
      year: true,
      yourCourses4: [],
      yourCourses5: [],
      currentUser: firebase.auth().currentUser.uid,
    }
  },
  methods: {
    // update() {
    //   this.displayCourses()
    // },
    displayCourses: function(){
      var _this = this
        _this.yourCourses4 = [];
      firebase.firestore().doc('users/'+ this.currentUser).collection('year4').get()
      .then(function(coursesDB) {
        coursesDB.forEach(function(doc) {
          _this.yourCourses4.push(doc.data());
          console.log(_this.yourCourses4);
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
    deleteCourse: function(del){
      var _this = this
      if(_this.year == true){
        firebase.firestore().doc('users/'+ _this.currentUser).collection('year4').get()
        .then(function(coursesDB) {
          coursesDB.forEach(function(doc) {
            if(doc.data().id == del.id){
              firebase.firestore().doc('users/'+ _this.currentUser).collection('year4').doc(doc.id).delete();
              _this.displayCourses();
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
              _this.displayCourses();
            }
          })
        })
      }
    },
  },
}
</script>
<style>
.ProgressBar {
  background-color: #F4F6F6;
  border-radius: 7px;
}
.p4 {
  width: 100%;
  display: block;
  overflow: auto;
  color: black;
  background-color: #A5D46A;
  opacity: 0.7;
  border-radius: 7px;
}
.p3 {
  width: 100%;
  display: block;
  overflow: auto;
  color: black;
  background-color: #e0e0d1;
  opacity: 0.7;
  border-radius: 7px;
}
.p2 {
  width: 100%;
  display: block;
  overflow: auto;
  color: black;
  background-color: #A5D46A;
  opacity: 0.7;
  border-radius: 7px;
}
.p1 {
  width: 100%;
  display: block;
  overflow: auto;
  color: black;
  background-color: #e0e0d1;
  opacity: 0.7;
  border-radius: 7px;
}
#yearBtn4 {
  opacity: 0.5;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
}
#yearBtn5 {
  opacity: 0.5;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
}
</style>