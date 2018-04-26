<template>
  <div class="Courses col-sm-9">
    <h3>Courses</h3>
    <div class="col-lg-12">
      <input type="text" v-model="search" class="form-control" placeholder="Search" aria-describedby="basic-addon1"/>
      <br/>
      <div class= "col-lg-4">
        <label class="typo__label">Groups</label>
        <multiselect v-model="period" :options="options" :multiple="true" group-values="libs" group-label="language" :group-select="true" placeholder="Type to search" track-by="name" label="name"><span slot="noResult">Oops! No elements found. Consider changing the search query.</span></multiselect>
        <!--<pre class="language-json"><code>{{ value  }}</code></pre>-->
      </div>
      <div class= "col-lg-4">
        <label class="typo__label">Groups</label>
        <multiselect v-model="value1" :options="options1" :multiple="true" group-values="libs1" group-label="language" :group-select="true" placeholder="Type to search" track-by="name" label="name"><span slot="noResult">Oops! No elements found. Consider changing the search query.</span></multiselect>
        <!--<pre class="language-json"><code>{{ value  }}</code></pre>-->
      </div>
      <div class= "col-lg-4">
        <label class="typo__label">Groups</label>
        <multiselect v-model="period" :options="options" :multiple="true" group-values="libs" group-label="language" :group-select="true" placeholder="Type to search" track-by="name" label="name"><span slot="noResult">Oops! No elements found. Consider changing the search query.</span></multiselect>
        <!--<pre class="language-json"><code>{{ value  }}</code></pre>-->
      </div>
    </div>


  <div class="col-lg-12">
        <label class="typo__label">Courses</label>

      <div v-if="courses && courses.length">
            <div v-for="courses in filteredCourses" :key="courses.id" class="thumbnail" id="courseDiv">
              <router-link :to="{ name: 'Showcourse', params: { id: courses.id, title: courses.title, period: courses.period, credits: courses.credits, info: courses.info}}">
                <div class="col-lg-7">
                  <h4><strong>{{courses.id}} </strong> {{courses.title}}</h4>
                </div>
              </router-link>
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
export default {
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
    db.collection("courses").get()
      .then(function(querySnapshot) {
         querySnapshot.forEach(function(doc, courses) {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          //console.log(doc.data().id);
        _this.courses.push(doc.data());
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
      props: ['model'],
      search: "",
      courses: [],
      options: [
        {
          language: 'Period',
          libs: [
            { name: 'P1', category: 'Front-end' },
            { name: 'P2', category: 'Backend' },
            { name: 'P3', category: 'Front-end' },
            { name: 'P4', category: 'Backend' }
          ]
        },
      ],
      period: [],
      options1: [
        {
          language: 'All',
          libs1: [
            { name: 'hej', category: 'Front-end' },
            { name: 'hå', category: 'Backend' },
            { name: 'då', category: 'Front-end' },
            { name: 'yo', category: 'Backend' }
          ]
        },
      ],
      value1: []
    }
  },
  computed: {
    //Creates a computed prop fror search
    filteredCourses: function() {
      return this.courses.filter((course) => {
        return course.title.match(this.search)
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
}
</script>
<style scoped>
#courseDiv {
  color: black;
  background-color: #42b883;
  opacity: 0.7;
  height: 70px;
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