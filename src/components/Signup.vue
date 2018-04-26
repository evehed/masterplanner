<template>
  <div class="row">
    <!-- <div class="col-lg-3"> -->
      <div class="col-sm-3"></div>
      <div class="col-sm-6 container text-center" id="login">
          <h3>Sign Up</h3>
          <input type="text" v-model="email" placeholder="Enter email here"><br>
          <input type="password" v-model="password"placeholder="Enter password here"><br>
          <router-link to="/">
          <button type="button" v-on:click="signUp" id="signupBtn" class="btn btn-warning btn-md">Sign Up</button>
          </router-link>
          <br><br>
      </div>
      <div class="col-sm-3"></div>
    </div>

  <!-- </div> -->
</template>

<script>
  import firebase from 'firebase';


  export default {
    name: 'signup',
    data: function() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signUp: function(){
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          function(user) {
            alert('You have created a account!')
          },
          function(err) {
            alert('Oops ' + err.message)
          }
        );
  
      }
    }
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
