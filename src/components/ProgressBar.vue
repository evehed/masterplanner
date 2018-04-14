<template>
  <div class="ProgressBar col-sm-3">
    <h3>Progressbaaar</h3>
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
