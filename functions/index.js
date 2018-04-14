var fetch =require('node-fetch');
//import fetch from 'node-fetch';
const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  // console.log("first func yoyo")
  // response.send("Hello from Firebase! bllls");
  // return{
  //   message: "hejhejHÄj"
  // }
});

exports.getAllCourses = functions.https.onRequest((request, response) => {

  fetch('https://www.kth.se/api/kopps/v2/courses/DM.json')
  .then(function(res) {
    if (!res.ok) {
    throw Error(res.statusText);
  }
      console.log(res);
      return res;

  })
  .catch(function(error) {
    console.log('Looks like there was a problem: \n', error);
  });
});
