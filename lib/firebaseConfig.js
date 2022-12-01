// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0lGl6RTXBMQVKVg1f7373Ltw4JnPyp4I",
  authDomain: "intressantahus.firebaseapp.com",
  projectId: "intressantahus",
  storageBucket: "intressantahus.appspot.com",
  messagingSenderId: "907077666986",
  appId: "1:907077666986:web:a2e30535379ff572c568d3",
  measurementId: "G-X1MW8ZG9HY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase storage reference
const storage = getStorage(app);
export default storage;
