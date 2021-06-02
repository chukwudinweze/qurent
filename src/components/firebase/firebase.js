import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBAjS5ncRG4ChJ6tP0d5-Kxlf5GLjvpeqc",
  authDomain: "qurenta-3cc7a.firebaseapp.com",
  projectId: "qurenta-3cc7a",
  storageBucket: "qurenta-3cc7a.appspot.com",
  messagingSenderId: "1064695727015",
  appId: "1:1064695727015:web:426f34bac6b2ef37ec2c82",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { storage, firebase as default };
