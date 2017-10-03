import * as firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyB-QaHUu_85-gjdh5C-NAuOZQybibIYOmE",
  authDomain: "todoapp-399d6.firebaseapp.com",
  databaseURL: "https://todoapp-399d6.firebaseio.com",
  projectId: "todoapp-399d6",
  storageBucket: "todoapp-399d6.appspot.com",
  messagingSenderId: "586287573861"
});

export const firebaseRef = firebase.database().ref();
export default firebase;
