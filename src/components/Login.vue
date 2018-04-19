<template>
  <div class="row">
    <!-- <div class="col-lg-3"> -->
      <div class="col-sm-3"></div>
      <div class="col-sm-6 container text-center" id="login">
          <h3>Sign In</h3>
          <input type="text" placeholder="Email"><br>
          <input type="password" placeholder="Password"><br>
          <button type="button" class="btn btn-warning btn-lmd">Login</button>
          <p>You don't have an account? You can creat one</p>
      </div>
      <div class="col-sm-3"></div>
    </div>
    
  <!-- </div> -->
</template>

<script>
  //import firebase from './firebaseinit.js'


  export default {
    name: 'login',
    data: function() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
#login {
  margin-top: 70px;
}
input {
  margin: 10px 0;
  width: 60%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 15%;
  cursor: pointer;
  border-radius: 10px;
  opacity: 1.0;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>


