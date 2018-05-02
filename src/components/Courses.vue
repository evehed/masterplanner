<template>
  <div class="Courses col-sm-9">
    <h3>Courses</h3>
    <div class="col-lg-12">
      <input type="text" v-model="search" class="form-control" placeholder="Search" aria-describedby="basic-addon1"/>
      <br/>
      <div class= "col-lg-4">
        <label class="typo__label">Period</label>
        <multiselect v-model="period" :options="options" :multiple="true" group-values="libs" group-label="language" :group-select="true" placeholder="Type to search" track-by="name" label="name"><span slot="noResult">Oops! No elements found. Consider changing the search query.</span></multiselect>
        <!--<pre class="language-json"><code>{{ value  }}</code></pre>-->
      </div>
      <div class= "col-lg-4">
        <label class="typo__label">Max credits</label>
        <multiselect v-model="credits" :options="options1" :multiple="true" group-values="libs1" group-label="language" :group-select="true" placeholder="Type to search" track-by="name" label="name"><span slot="noResult">Oops! No elements found. Consider changing the search query.</span></multiselect>
        <!--<pre class="language-json"><code>{{ value  }}</code></pre>-->
        <br></br>
      </div>
    </div>
    


    <div class="col-lg-12">
      <label class="typo__label">Courses</label>

    <div v-if="courses && courses.length">
        <div v-for="courses in filteredCourses" :key="courses.id" class="thumbnail courseDiv">
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
// Alternative to passing the moderl as the component property,
// we can import the model instance directly
import Multiselect from 'vue-multiselect';
import { modelInstance } from "../data/CourseModel";

import axios from 'axios';
import db from './firebaseInit';
import firebase from 'firebase';


export default {
  props: ['progressbar'],
  components: {
    Multiselect
  },
  mounted(){
  //  API call
    // axios.get('http://pebble-pickup.herokuapp.com/tweets')
    // //  axios.get('http://crossorigin.me/https://www.kth.se/api/kopps/v2/courses/DM.json')
    // .then(response => {
    //   this.courses = response.data
    // })
    // .catch(error => {
    //   console.log(error);
    // })
    var _this = this;
    console.log("curren user: "+firebase.auth().currentUser.uid)

    db.collection("courses").get()
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


  },
  data () {
    return {
      status: "INITIAL",
      search: "",
      courses: [],
      currentUser: firebase.auth().currentUser.uid,

      options: [
        {
          language: 'Period',
          libs: [
            { name: '1', category: 'Front-end' },
            { name: '2', category: 'Backend' },
            { name: '3', category: 'Front-end' },
            { name: '4', category: 'Backend' }
          ]
        },
      ],
      period: [],
      options1: [
        {
          language: 'All',
          libs1: [
            { name: '1', category: 'Front-end' },
            { name: '2', category: 'Backend' },
            { name: '3', category: 'Front-end' },
            { name: '4', category: 'Backend' },
            { name: '6', category: 'Front-end' },
            { name: '7', category: 'Backend' },
            { name: '8', category: 'Front-end' },
            { name: '9', category: 'Backend' }
          ]
        },
      ],
      credits: [],

    }
  },
  computed: {
    //Creates a computed prop fror search

    // filteredCourses() {
    //   return this.courses.filter(course => {
    //     return course.title.toLowerCase().includes(this.search.toLowerCase())
    //   })
    // }
  
    
    filteredCourses: function() {
      return this.courses.filter((course) => {
        return course.title.includes(this.search || this.period || this.credits)
      });
      return this.courses.period.filter((peri) => {
        return peri.period.includes(this.period)
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
    console.log(c.id);
    firebase.firestore().doc('users/'+ this.currentUser).collection('year4').add(c)
    this.props.progressbar.displayCourses();
  },
  addYear5: function(c){
    firebase.firestore().doc('users/'+ this.currentUser).collection('year5').add(c)
    this.props.progressbar.displayCourses();
  },
}

}
</script>
<style scoped>
.courseDiv {
  color: black;
  background-color: #42b883;
  opacity: 0.7;
  height: 150px;
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
