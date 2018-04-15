<template>
  <div class="ProgressBar col-sm-3">
    <h3>Progressbaaar</h3>
    <div class="btn-group btn-group-justified">
      <a href="#" class="btn btn-default">Year 4</a>
      <a href="#" class="btn btn-default">Year 5</a>
    </div>
    <br/>
    <div class="p4">
      <p>P4</p>
    </div>
    <div class="p3">
      <p>P3</p>
    </div>
    <div class="p2">
      <p>P2</p>
    </div>
    <div class="p1">
      <p>P1</p>
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
      }
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
