import { initializeApp } from "firebase/app"

import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBlJgvv47Q41i0YMpCP53rIXtGLfOdD9hU",
  authDomain: "movieslist-72a55.firebaseapp.com",
  projectId: "movieslist-72a55",
  storageBucket: "movieslist-72a55.appspot.com",
  messagingSenderId: "636561993397",
  appId: "1:636561993397:web:09984ccab21d768e8b58fc",
  measurementId: "G-ZG1VGT5NFH"
};
// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export default app