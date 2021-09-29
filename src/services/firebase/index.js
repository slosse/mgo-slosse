
import * as firebase from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDDNrVr5S5aMZJAgFZ7-asFYLYQOlYdV3A",
  authDomain: "mgoweb-96f1e.firebaseapp.com",
  projectId: "mgoweb-96f1e",
  storageBucket: "mgoweb-96f1e.appspot.com",
  messagingSenderId: "558776893580",
  appId: "1:558776893580:web:747e1507fd7c45e7e8fba9"
};


const app = firebase.initializeApp(firebaseConfig);

export const db = getFirestore()

