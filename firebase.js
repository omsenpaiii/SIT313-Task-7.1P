import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAl7SpKDOnRdSUeXcA8o6RdYySnf2FkDjI",
  authDomain: "login-page-42c77.firebaseapp.com",
  projectId: "login-page-42c77",
  storageBucket: "login-page-42c77.appspot.com",
  messagingSenderId: "49681528444",
  appId: "1:49681528444:web:a0b8ca86e8237992bd3bf9",
  measurementId: "G-VQH8BESF85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore(app);



