
import firebase from 'firebase';

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyB74dg-Nn_WO3YWqEVOQkEwTjfTQTltbmU",
    authDomain: "portfolio-dhilip.firebaseapp.com",
    databaseURL: "https://portfolio-dhilip.firebaseio.com",
    projectId: "portfolio-dhilip",
    storageBucket: "portfolio-dhilip.appspot.com",
    messagingSenderId: "200400488963",
    appId: "1:200400488963:web:23d2969793ee5a1c989c36",
    measurementId: "G-T8W0QMN9PG"
      
});
const db = firebaseApp.firestore();

export default db;
