<template>
  <div class="row">
      <div class="col-sm-4"></div>
      <div class="col-sm-5 center-block text-center" id="login">
          <h3>Sign In</h3>
          <input type="text" v-model="email" placeholder="Email"><br>

          <input v-on:keyup.enter="signIn" type="password" v-model="password" placeholder="Password"><br>

            <button v-on:click="signIn" type="button" id="loginBtn" class="btn btn-warning btn-md">Log In</button>
          <p>You don't have an account? Sign up here</p>
          <router-link to="/signup">
          <button type="button" id="signupBtn" class="btn btn-warning btn-md">Sign Up</button>
          </router-link>
          <br><br>
      </div>
      <div class="col-sm-3"></div>
    </div>
</template>

<script>
import firebase from 'firebase';
  export default {
    name: 'Login',
    data: function() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signIn: function() {
        var _this = this;
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          function() {
            alert('You are now connected!')
            _this.$router.replace('search')
          },
          function(err) {
            alert('Oops ' + err.message)
          }
        );


      },


    }
  }
</script>

<style scoped>
#login {
  margin-top: 70px;
  background-color: #F4F6F6;
  border-radius: 10px;
  width: 35%;
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
