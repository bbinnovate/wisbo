import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyACUASc7k0Rt93Of4TlpG9GKH6Pm2xKSUw",
  authDomain: "wisbo-931a7.firebaseapp.com",
  projectId: "wisbo-931a7",
  storageBucket: "wisbo-931a7.firebasestorage.app",
  messagingSenderId: "882570977876",
  appId: "1:882570977876:web:c725d421f3ca03f3de83c1",
  measurementId: "G-CF97PTJ708"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
