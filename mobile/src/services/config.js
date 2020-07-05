import * as firebase from 'firebase'

let config = {
    apiKey: "AIzaSyCG_G67rk7ReCZmJAxVrxHmBmjRMWUq7Dk",
    authDomain: "desafio-wilson-son.firebaseapp.com",
    databaseURL: "https://desafio-wilson-son.firebaseio.com",
    projectId: "desafio-wilson-son",
    storageBucket: "desafio-wilson-son.appspot.com",
    messagingSenderId: "295276616420",
    appId: "1:295276616420:web:19d8d441fb719299476af1"
};

export const db = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();