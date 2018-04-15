<template>
  <div class="ProgressBar col-sm-3">
    <h3>Progressbaaar</h3>
    <div class="btn-group btn-group-justified">
      <a class="btn btn-default"  v-on:click="year = true">Year 4</a>
      <a class="btn btn-default"  v-on:click="year = false">Year 5</a>
    </div>
    <br/>

    <div v-if= "year">
    <div class="p4">
      <p>P4 4</p>
    </div>
    <div class="p3">
      <p>P3 4</p>
    </div>
    <div class="p2">
      <p>P2 4</p>
    </div>
    <div class="p1">
      <p>P1 4</p>
    </div>
  </div>

    <div v-else>
    <div class="p4">
      <p>P4 5</p>
    </div>
    <div class="p3">
      <p>P3 5</p>
    </div>
    <div class="p2">
      <p>P2 5</p>
    </div>
    <div class="p1">
      <p>P1 5</p>
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
.progress {

}
.p4 {
  width: 100%;
  height: 50px;
  background-color: #42b883;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

}
.p3 {
  width: 100%;
  height: 50px;
  background-color: #A5D46A;
}
.p2 {
  width: 100%;
  height: 50px;
  background-color: #F1F19E;
}
.p1 {
  width: 100%;
  height: 50px;
  background-color: #e0e0d1;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

}
</style>
