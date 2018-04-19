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
    <div class="p4">
      <p>P4 4</p>
    </div>
    <br>
    <div class="p3">
      <p>P3 4</p>
    </div>
    <br>
    <div class="p2">
      <p>P2 4</p>
    </div>
    <br>
    <div class="p1">
      <p>P1 4</p>
    </div>
    <br><br>
  </div>

    <div v-else>
    <div class="p4">
      <p>P4 5</p>
    </div>
    <br>
    <div class="p3">
      <p>P3 5</p>
    </div>
    <br>
    <div class="p2">
      <p>P2 5</p>
    </div>
    <br>
    <div class="p1">
      <p>P1 5</p>
    </div>
    <br><br>
  </div>
  </div>

  </div>
</template>

<script>
  // Alternative to passing the moderl as the component property,
  // we can import the model instance directly


  export default {
    props: ['model'],
    // this methods is called by Vue lifecycle when the
    // component is actually shown to the user (mounted to DOM)
    // that's a good place to call the API and get the data
    mounted() {
      // when data is retrieved we update it's properties
      // this will cause the component to re-render

    },
    data() {
      return {
        status: 'INITIAL',
        year: true,

      }
    },

    methods: {
      // setYear: function(year){
      //   console.log(year);
      //   return this.year == year;
      // },
    }
  }
</script>
<style>
.ProgressBar {
  background-color: #F4F6F6;
  border-radius: 7px;
}
.p4 {
  width: 100%;
  height: 50px;
  color: black;
  background-color: #A5D46A;
  opacity: 0.7;
  border-radius: 7px;

}
.p3 {
  width: 100%;
  height: 50px;
  color: black;
  background-color: #e0e0d1;
  opacity: 0.7;
  border-radius: 7px;
}
.p2 {
  width: 100%;
  height: 50px;
  color: black;
  background-color: #A5D46A;
  opacity: 0.7;
  border-radius: 7px;
}
.p1 {
  width: 100%;
  height: 50px;
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
