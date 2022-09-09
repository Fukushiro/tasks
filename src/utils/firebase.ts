// Import the functions you need from the SDKs you need
import firebase from 'firebase';
import 'firebase/storage';
import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDdbxRGqs7xVTeLuKDAIWk55f7sefm_93Y',
  authDomain: 'task-ff990.firebaseapp.com',
  projectId: 'task-ff990',
  storageBucket: 'task-ff990.appspot.com',
  messagingSenderId: '816431145809',
  appId: '1:816431145809:web:838a628ca4df0045ac6970',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const database = firebase.firestore();
