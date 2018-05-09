<template>
  <div class="col-sm-3">
    <div class="ProgressBar col-sm-12 center-block">
      <h3>Progressbar</h3>
      <div class="btn-group btn-group-justified">
        <a id="yearBtn4" class="btn btn-warning"  v-on:click="changeYear('4')">Year 4</a>
        <a id="yearBtn5" class="btn btn-warning"  v-on:click="changeYear('5')">Year 5</a>
      </div>
      <br/>
      <!--Year 4 in progressbar-->
      <div v-if= "year=='4'">
        <div v-if="updateProgressBar">
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
      </div>

      <!--Year 5 in progressbar-->
      <div v-if="year=='5'">
        <div v-if="updateProgressBar">
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
                    <td><span v-on:click="deleteCourse(courses)" class='glyphicon glyphicon-remove' ></span></td>
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
                    <td><span v-on:click="deleteCourse(courses)" class='glyphicon glyphicon-remove' ></span></td>
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
                    <td><span v-on:click="deleteCourse(courses)" class='glyphicon glyphicon-remove' ></span></td>
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
  </div>

</div>
</template>
<script>
import firebase from 'firebase';

export default {
  //Props from parent
  props: ['yourCourses4', 'yourCourses5','year'],

  //Watches a change of some of the props
  watch: {
    yourCourses4: function (newCourse4, oldCourse4) {
      this.updateProgressBar(newCourse4);
    },
    yourCourses5:  function (newCourse5, oldCourse5) {
      this.updateProgressBar(newCourse5);
    },
    year: function(newYear, oldYear){
      this.updateProgressBar(newYear);
    }
  },

  mounted() {
  },

  data() {
    return {
    }
  },

  methods:{
    //Is trigged when progressbar is updated (a course deleted or added)
    updateProgressBar: function(uptatecourse){
      //console.log("update with"+uptatecourse);
    },
    //Function to delete  course from progressbarby passing the event to parent and the call the updatefunc
    deleteCourse: function(del){
      this.$emit('delete-course', del)
      this.updateProgressBar(del)
    },
    //Function to change year of the view in progressbar by passing the event to parent
    changeYear: function(val){
      this.$emit('change-year-to', val)
    }
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
