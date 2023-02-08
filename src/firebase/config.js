import firebase from 'firebase/app';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDns7uWR8Vm67m39beEAmtN7PfstmW-y-M",
    authDomain: "cooking-site-3a115.firebaseapp.com",
    projectId: "cooking-site-3a115",
    storageBucket: "cooking-site-3a115.appspot.com",
    messagingSenderId: "712002400330",
    appId: "1:712002400330:web:375e1a7fdc2c9ce18976b3",
    measurementId: "G-BJXTSB1GL7"
  }

  // initialize firebase
  firebase.initializeApp(firebaseConfig)

  // intialize services
  const projectFirestore = firebase.firestore()

  export { projectFirestore }