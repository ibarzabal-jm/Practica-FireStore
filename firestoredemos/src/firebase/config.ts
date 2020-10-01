import firebase from  'firebase/app'
import 'firebase/firestore'

 const firebaseConfig = {
    apiKey: "AIzaSyAsQ0Fqy2sDCKYE1Xg8BR80hT-qX70BYeo",
    authDomain: "sql-demos-63740.firebaseapp.com",
    databaseURL: "https://sql-demos-63740.firebaseio.com",
    projectId: "sql-demos-63740",
    storageBucket: "sql-demos-63740.appspot.com",
    messagingSenderId: "209206907621",
    appId: "1:209206907621:web:16fc02c3171fc06ac0ba0c",
    measurementId: "G-S337407727"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


console.log('firebaseconfig');

export default firebase.firestore();
