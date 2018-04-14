<template>
  <section class="container">
    <h1>Add New Contact</h1>

    <form @submit.prevent="saveContact">
      <div class="field">
        <label class="label">First Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="First Name" v-model="firstname" required>
        </div>
      </div>

      <div class="field">
        <label class="label">Last Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Last Name" v-model="lastname" required>
        </div>
      </div>

      <div class="field">
        <label class="label">Email Address</label>
        <div class="control">
          <input class="input" type="email" placeholder="Email Address" v-model="emailaddress" required>
        </div>
      </div>

      <div class="field">
        <label class="label">Phone Number</label>
        <div class="control">
          <input class="input" type="text" placeholder="Phone Number" v-model="phonenumber" required>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <button type="submit" class="button is-link">Submit</button>
        </div>
      </div>

    </form>

    <form @submit.prevent="writeSomething">
      <div class="field">
        <label class="label">textEN</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text" v-model="text" required>
        </div>
      </div>
      <button type="submit" class="button is-link">Submit</button>
    </form>

  </section>
</template>

<script>

import db from './firebaseInit';
import axios from 'axios';
import { modelInstance } from "../data/DinnerModel";


const httpOptions = {
  headers: {}
};



export default {
  name: 'new-contact',
  data () {
    return {
      firstname: null,
      lastname: null,
      emailaddress: null,
      phonenumber: null,
      text: null,
      status: 'INITIAL',


    }
  },
  mounted() {
    // when data is retrieved we update it's properties
    // this will cause the component to re-render
    console.log("nu e det mounted")
    modelInstance.getAllCourses().then(courses => {
      this.status = 'LOADED'
    }).catch(() => {
      this.status = 'ERROR'
    })
  },
  methods: {

    saveContact () {
      db.collection('contacts').add({
        firstname: this.firstname,
        lastname: this.lastname,
        emailaddress: this.emailaddress,
        phonenumber: this.phonenumber,
        slug: this.generateUUID()
      })
      .then(function (docRef) {
        console.log('Document written with ID: ', docRef.id)
      })
      .catch(function (error) {
        console.error('Error adding document: ', error)
      })
    },
    generateUUID () {
      let d = new Date().getTime()
      let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (d + Math.random() * 16) % 16 | 0
        d = Math.floor(d / 16)
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
      })
      return uuid
    },
    writeSomething (){
      db.collection('text').add({
        text: this.text
      })
      console.log("hejsaan");

    },

  }
}
</script>

<style scoped>

section {
  height: 100vh;
}

h1 {
  font-size: 30px;
  margin: 30px 0;
}

.input {
  height: 40px;
}

</style>
