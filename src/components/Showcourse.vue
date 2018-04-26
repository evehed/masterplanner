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
            </div>
            <progressbar :model = "this.model"/>
       
        <div id="courseBox" class="col-lg-9">
            <h3> {{$route.params.id}}</h3>
            <h1> {{$route.params.title}}</h1>
            <div class="col-sm-12" id="courseDiv">
                <h4>Credits: {{$route.params.credits}}</h4>
                <h4>Period: {{$route.params.period}}</h4>
                <p> {{$route.params.info}}</p>
                <br><br>
                <div class="col-lg-8">
                    <div class="col-lg-4">
                        <button id="year4Btn" type="button" class="btn-lg btn-warning">Add to year 4</button>
                    
                    </div>
                    <div class="col-lg-4">
                        <button id="year5Btn" type="button" class="btn-lg btn-warning">Add to year 5</button>
                    </div>
                </div>
            </div>
        </div>
         </div>
    </div>
    
    
</template>


<script>
  import ProgressBar from '@/components/ProgressBar';
  import { modelInstance } from "../data/CourseModel";
  export default {
    props: ['model'],
    components: {
      'progressbar': ProgressBar,
    },
    
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

  

