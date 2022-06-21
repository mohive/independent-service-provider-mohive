// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxjNk8pZqPZKbrKJfMjlcJQLRTculK99k",
  authDomain: "hotel-service-provider.firebaseapp.com",
  projectId: "hotel-service-provider",
  storageBucket: "hotel-service-provider.appspot.com",
  messagingSenderId: "8095996026",
  appId: "1:8095996026:web:27ba2d982971ad170a83c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
export default auth;