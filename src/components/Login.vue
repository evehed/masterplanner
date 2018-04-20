<template>
  <div class="row">
    <!-- <div class="col-lg-3"> -->
      <div class="col-sm-3"></div>
      <div class="col-sm-6 container text-center" id="login">
          <h3>Sign In</h3>
          <input type="text" placeholder="Email"><br>
          <input type="password" placeholder="Password"><br>
          <button type="button" id="loginBtn" class="btn btn-warning btn-md">Log In</button>
          <p>You don't have an account? Sign up here</p>
          <button type="button" id="signupBtn" class="btn btn-warning btn-md">Sign Up</button>
          <br><br>
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
  background-color: #F4F6F6;
  border-radius: 10px;
  width: 40%;
  height: 100%;
}
input {
  margin: 10px 0;
  width: 60%;
  padding: 15px;
}
#loginBtn {
  margin-top: 20px;
  width: 15%;
  cursor: pointer;
  border-radius: 10px;
  opacity: 1.0;
}
#signupBtn {
  margin-top: 20px;
  width: 20%;
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


