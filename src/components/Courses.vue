<template>
  <div class="Courses col-sm-9">
    <h3>Courses</h3>
    <div class="col-lg-12">
      <input type="text" v-model="search" class="form-control" placeholder="Search" aria-describedby="basic-addon1"/>
      <br/>
<<<<<<< HEAD
      <div class="col-lg-4">
        <label class="typo__label">Period</label>
        <multiselect v-model="value" tag-placeholder="Add this as new tag" placeholder="Period" label="name" track-by="code" :options="options" :group-select="true" :multiple="true" :taggable="true"></multiselect>
=======

      <div class="col-lg-4">
        <label class="typo__label">Period</label>
        <multiselect v-model="value" tag-placeholder="Add this as new tag" placeholder="Period" label="name" track-by="code" :options="options" :group-select="true" :multiple="true" :taggable="true"></multiselect>

        <!--<pre class="language-json"><code>{{ value  }}</code></pre>-->
>>>>>>> 1c8a5fc4340ccd51282b20b1e667510ad2ef282c
        <br></br>
      </div>
    </div>

    <div class="col-lg-12">
      <label class="typo__label">Courses</label>
<<<<<<< HEAD
      <div v-if="courses && courses.length">
=======

    <div v-if="courses && courses.length">
>>>>>>> 1c8a5fc4340ccd51282b20b1e667510ad2ef282c
        <div v-if="" v-for="courses in filteredCourses" :key="courses.id" class="thumbnail courseDiv">
          <div class="col-lg-8">
            <h4><strong>{{courses.id}}</strong> {{courses.title}}</h4>
            <h6>{{courses.info}}</h6>
            <br/>
          </div>
          <div class="col-lg-2">
            <h5><strong>Period:</strong> {{courses.period}}</h5>
            <h5><strong>Credits</strong> {{courses.credits}}</h5>
          </div>
          <div class="col-lg-2 center-block" style="" >
            <button id="addBtn" v-on:click="addYear4(courses)" type="button" class="btn btn-warning btn-lg center-block">Add to year 4</button>
            <button id="addBtn" v-on:click="addYear5(courses)" type="button" class="btn btn-warning btn-lg center-block">Add to year 5</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Multiselect from 'vue-multiselect';
//import { modelInstance } from "../data/CourseModel";
import axios from 'axios';
import db from './firebaseInit';
import firebase from 'firebase';

export default {
  props: ['progressbar'],
  components: {
    Multiselect
  },
  mounted(){
    var _this = this;
  //  console.log("curren user: "+firebase.auth().currentUser.uid)
    db.collection("courses").get()
<<<<<<< HEAD
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc, courses) {
        if (_this.courses === undefined || _this.courses.length == 0){
          _this.courses.push(doc.data());
        } else {
          let found = false
          for (var c in _this.courses){
            if(_this.courses[c].id === doc.data().id){
              found =true;
              break;
            }
          }
          if (!found) {
            _this.courses.push(doc.data());
          }
        }
      });
    })
    .catch(error => {
      console.log(error);
    })
=======
      .then(function(querySnapshot) {
        //console.log(querySnapshot);
         querySnapshot.forEach(function(doc, courses) {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          //console.log(doc.data().id);

          if (_this.courses === undefined || _this.courses.length == 0){
            _this.courses.push(doc.data());
          } else {
            let found = false
            for (var c in _this.courses){
              if(_this.courses[c].id === doc.data().id){
                found =true;
                break;
                }
            }
            if (!found) {
               _this.courses.push(doc.data());
            }
          }

        });
      })
      .catch(error => {
        console.log(error);
      })
    //curl "https://https://us-central1-iprogproj.cloudfunctions.net/helloWorld-iprogproj.cloudfunctions.net/helloWorld";
>>>>>>> 1c8a5fc4340ccd51282b20b1e667510ad2ef282c
  },
  data () {
    return {
      status: "INITIAL",
      search: "",
      currentUser: firebase.auth().currentUser.uid,
      courses: [],
      value: [],
      options: [
<<<<<<< HEAD
=======

>>>>>>> 1c8a5fc4340ccd51282b20b1e667510ad2ef282c
        { name: '1', code: '1'},
        { name: '2', code: '2'},
        { name: '3', code: '3'},
        { name: '4', code: '4'}

      ],
<<<<<<< HEAD
    }},
    computed: {
      //Creates a computed prop fror search
      filteredCourses: function() {
        return this.courses.filter((course) => {
          if (this.value.length != 0) {
            return course.period.includes(this.value[0].name) && course.title.includes(this.search);
          }else{
            return course.title.includes(this.search);
          }
        });
      },
    },
    methods: {
      addYear4: function(c){
        this.$emit('add-year4', c)
      },
      addYear5: function(c){
        this.$emit('add-year5', c)
      },
    }
  }
  </script>
  <style scoped>
  .courseDiv {
    color: black;
    background-color: #42b883;
    opacity: 0.7;
    display: block;
    overflow: auto;
    border-radius: 10px;
  }
  .Courses {
    background-color: #F4F6F6;
    border-radius: 10px;
    width: 74%;
  }
  .dropdown {
    position: relative;
    display: inline-block;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
  }
  .dropdown:click .dropdown-content {
    display: block;
  }
  </style>
=======

  }},
  computed: {
    //Creates a computed prop fror search
    filteredCourses: function() {
      return this.courses.filter((course) => {
        if (this.value.length != 0) {
            return course.period.includes(this.value[0].name) && course.title.includes(this.search);
        }else{
          return course.title.includes(this.search);
        }

      });
    },


  //   searchCourses: function() {
  //     db.collection("courses").get()
  //      .then(function(querySnapshot) {
  //
  //        querySnapshot.forEach(function(doc) {
  //          // doc.data() is never undefined for query doc snapshots
  //          // console.log(doc.id, " => ", doc.data());
  //          //console.log(doc.data().id);
  //          var id = doc.data().id;
  //
  //
  //
  //        return querySnapshot;
  //      })
  //      .catch(error => {
  //        console.log(error);
  //      })
  //
  //   }
  // }
},
methods: {
  addYear4: function(c){
    this.$emit('add-year4', c)

  },
  addYear5: function(c){
this.$emit('add-year5', c)
  },
}
}
</script>
<style scoped>
.courseDiv {
  color: black;
  background-color: #42b883;
  opacity: 0.7;
  display: block;
  overflow: auto;
  border-radius: 10px;
}
.Courses {
  background-color: #F4F6F6;
  border-radius: 10px;
  width: 74%;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
}
.dropdown:click .dropdown-content {
  display: block;
}
</style>




>>>>>>> 1c8a5fc4340ccd51282b20b1e667510ad2ef282c
