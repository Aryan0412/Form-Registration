import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBj8uZuMeI0y7l078P0l68mFNKozOqisY4",
  authDomain: "fitness-form-registration.firebaseapp.com",
  databaseURL: "https://fitness-form-registration-default-rtdb.firebaseio.com",
  projectId: "fitness-form-registration",
  storageBucket: "fitness-form-registration.appspot.com",
  messagingSenderId: "548155009659",
  appId: "1:548155009659:web:848659a123a489e75690de",
  measurementId: "G-SMF73G2Z64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);