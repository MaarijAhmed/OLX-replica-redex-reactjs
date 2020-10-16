import react from "React";
import firebase from "firebase"
import firebase from "firebase/database"
import firebase from "firebase/auth"
var firebaseConfig = {
    apiKey: "AIzaSyD2YDa92O8VnzjRJe9R0pao37KcVnDJHF8",
    authDomain: "olx-ac6ca.firebaseapp.com",
    databaseURL: "https://olx-ac6ca.firebaseio.com",
    projectId: "olx-ac6ca",
    storageBucket: "olx-ac6ca.appspot.com",
    messagingSenderId: "476364453644",
    appId: "1:476364453644:web:e8270bb68671e4ae477b29"
  };
 export default firebase.initializeApp(firebaseConfig);