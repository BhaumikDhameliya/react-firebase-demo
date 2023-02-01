import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyAlztMMVXKXA5oSVpwe0XthJ6TWNe31BSo",
//   authDomain: "fir-course-beba9.firebaseapp.com",
//   projectId: "fir-course-beba9",
//   storageBucket: "fir-course-beba9.appspot.com",
//   messagingSenderId: "236316955671",
//   appId: "1:236316955671:web:2b18d92e1b6644fae3f852",
//   measurementId: "G-HENJ7D82KH",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBFgveIh2dHVuMglONZGTQfPBlaFEIgGbE",
  authDomain: "react-firebase-demo-3a05e.firebaseapp.com",
  projectId: "react-firebase-demo-3a05e",
  storageBucket: "react-firebase-demo-3a05e.appspot.com",
  messagingSenderId: "448880439963",
  appId: "1:448880439963:web:32991a8e778685404d0c3e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
