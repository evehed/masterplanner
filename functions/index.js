var axios = require('axios');
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

// Used for doing API-call and add to database
// exports.getAllCourses = functions.https.onRequest((request, response) => {
//   //const coursesArray = [];
//         axios.get('https://www.kth.se/api/kopps/v2/courses/DM.json')
//         .then(res => {
//           var coursesArray = [];
//           var strdata = JSON.stringify(res.data.courses);
//           var parsedata = JSON.parse(strdata);
//           console.log(parsedata);
//
//           parsedata.forEach(function(c){
//             if (c.level === 'Avancerad nivå' && c.state === 'ESTABLISHED'){
//               db.collection('courses').add({
//                 id: c.code,
//                 title: c.title,
//                 href: c.href,
//                 info: c.info,
//                 credits: c.credits,
//               });
//             }
//           });
//             return res.data.courses;
//         })
//         .catch(error => {
//           console.log(error);
//         })
// });

// Add level to already exsisting documents
// exports.addMoreInfo = functions.https.onRequest((request, response) => {
//   db.collection("courses").get()
//   .then(function(querySnapshot) {
//
//     querySnapshot.forEach(function(doc) {
//       // doc.data() is never undefined for query doc snapshots
//       // console.log(doc.id, " => ", doc.data());
//       //console.log(doc.data().id);
//       const url = 'https://www.kth.se/api/kopps/v2/course/'+doc.data().id;
//
//       axios.get(url)
//       .then(res => {
//         var strdata = JSON.stringify(res.data);
//         var parsedata = JSON.parse(strdata);
//         var courseDocRef = db.collection("courses").doc(doc.id);
//         courseDocRef.set({
//           level: res.data.level.level,
//         });
//
//
//
//         return parsedata;
//       })
//       .catch(error => {
//         console.log(error);
//       })
//     });
//     return querySnapshot;
//   })
//   .catch(error => {
//     console.log(error);
//   })
//
//
// });
