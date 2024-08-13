// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg8sgNf7eKcLg5DAvum48nY2AJ3McTxas",
  authDomain: "netflixgpt-155b0.firebaseapp.com",
  projectId: "netflixgpt-155b0",
  storageBucket: "netflixgpt-155b0.appspot.com",
  messagingSenderId: "509696186342",
  appId: "1:509696186342:web:a6bece0397341ddb686827",
  measurementId: "G-PWH302NP3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();