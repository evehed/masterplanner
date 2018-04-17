var axios = require('axios');
//import fetch from 'node-fetch';
const functions = require('firebase-functions');
const admin = require('firebase-admin');

try {
  admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://iprogproj.firebaseio.com/',
});
} catch (e) {
  console.log('App already initialized...');
}

const db = admin.firestore();

exports.getAllCourses = functions.https.onRequest((request, response) => {

  const coursesArray = [];


        axios.get('https://www.kth.se/api/kopps/v2/courses/DM.json')
        .then(res => {
          var coursesArray = [];


          var strdata = JSON.stringify(res.data.courses);
          var parsedata = JSON.parse(strdata);
          console.log(parsedata);

          //console.log(len + " len")

          parsedata.forEach(function(c){
            if (c.level === 'Avancerad nivå' && c.state === 'ESTABLISHED'){
              db.collection('courses').add({
                id: c.code,
                title: c.title,
                href: c.href,
                info: c.info,
                credits: c.credits,

              });
            }


          });
          //
          //   coursesArray.push(parsedata);
          //   console.log(coursesArray);
          //   }

            return res.data.courses;

        })
        .catch(error => {
          console.log(error);
        })
        //console.log(coursesArray);



});
