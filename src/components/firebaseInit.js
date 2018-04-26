import firebase from 'firebase'

import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'
const firebaseApp = firebase.initializeApp(firebaseConfig, 'admin')
export default firebaseApp.firestore()

//var clientAuth = firebaseApp.auth();
