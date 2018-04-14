<template>
  <div class="Courses col-sm-9">
    <h3>Courses</h3>
    <div class="col-lg-12">
      <input type="text" class="form-control" placeholder="Search" aria-describedby="basic-addon1"/>
      <br/>
      <div class= "col-lg-4">
        <label class="typo__label">Groups</label>
        <multiselect v-model="value" :options="options" :multiple="true" group-values="libs" group-label="language" :group-select="true" placeholder="Type to search" track-by="name" label="name"><span slot="noResult">Oops! No elements found. Consider changing the search query.</span></multiselect>
        <!--<pre class="language-json"><code>{{ value  }}</code></pre>-->
      </div>
      <div class= "col-lg-4">
        <label class="typo__label">Groups</label>
        <multiselect v-model="value" :options="options" :multiple="true" group-values="libs" group-label="language" :group-select="true" placeholder="Type to search" track-by="name" label="name"><span slot="noResult">Oops! No elements found. Consider changing the search query.</span></multiselect>
        <!--<pre class="language-json"><code>{{ value  }}</code></pre>-->
      </div>
      <div class= "col-lg-4">
        <label class="typo__label">Groups</label>
        <multiselect v-model="value" :options="options" :multiple="true" group-values="libs" group-label="language" :group-select="true" placeholder="Type to search" track-by="name" label="name"><span slot="noResult">Oops! No elements found. Consider changing the search query.</span></multiselect>
        <!--<pre class="language-json"><code>{{ value  }}</code></pre>-->
      </div>


    </div>
  </div>
</template>

<script>
// Alternative to passing the moderl as the component property,
// we can import the model instance directly
import Multiselect from 'vue-multiselect';
import { modelInstance } from "../data/CourseModel";

export default {
  components: {
    Multiselect
  },
  mounted(){
    //console.log(this.model);
    console.log(modelInstance);

    modelInstance.getAllCourses().then(courses => {
        this.status = 'LOADED'
        console.log(courses);

      }).catch(() => {
        this.status = 'ERROR'
      })

  },
  data () {
    return {
      status: "INITIAL",
      props: ['model'],

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
      value: []
    }
  }
}
</script>
<style scoped>
.Courses {
  background-color: #526178;
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
