<template>
<div class="thumbnail">
    <div class="row">
      <div class="col-sm-12">
        <div class="col-sm-10">
          <p id="Select">SelectCourse</p>
        </div>
        <div class="col-sm-2">
          <br>
          <p id="loggedin">Logged in as:</p>
        </div> 
            <progressbar :model = "this.model"/>
            
                <div id="courseBox" class="col-lg-9">
                    <h2>{{$route.params.id}}</h2>
                    <h1>{{$route.params.title}}</h1>
                    <div class="col-sm-12" id="courseDiv">
                        <h4>Credits: {{$route.params.credits}}</h4>
                        <h4>Period: {{$route.params.period}}</h4>
                        <p>{{$route.params.info}}</p>
                        <br><br>
                        <button type="button" class="btn-lg btn-warning">Add to year 5</button>
                        <div class="col-sm-3">
                        <button type="button" class="btn-lg btn-warning">Add to year 4</button>
                        </div>
                    </div> 
                </div>
        </div>
    </div>
</div>
</template>

<script>
    import Multiselect from 'vue-multiselect';
    import { modelInstance } from "../data/CourseModel";
    import axios from 'axios';
    import db from './firebaseInit';
    import ProgressBar from '@/components/ProgressBar';
    export default {
        props: ['model'],
        components: {
        'progressbar': ProgressBar,
        Multiselect
    },
    mounted(){

        var _this = this;
        db.collection("courses").get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc, courses) {

            _this.courses.push(doc.data());
            });
        })
        .catch(error => {
            console.log(error);
        })
        
    },
    data () {
        return {
        status: "INITIAL",
        props: ['model'],
        search: "",
        courses: [],

        }}
    }
</script>

<style scoped>

#Select {
  font-size: 40pt;
}

#loggedin {
  font-size: 15pt;
}

#courseDiv {
  color: black;
  background-color: #42b883;
  opacity: 0.7;
  height: 240px;
  border-radius: 10px;
}

#courseBox {
  background-color: #F4F6F6;
  border-radius: 7px; 
  height: 400px;
}

</style>