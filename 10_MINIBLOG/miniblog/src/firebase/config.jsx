import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB3Ago4E4tVnZGygvo7N1TcCDsFuVfUs7s",
  authDomain: "miniblog1-1bb69.firebaseapp.com",
  projectId: "miniblog1-1bb69",
  storageBucket: "miniblog1-1bb69.firebasestorage.app",
  messagingSenderId: "254765843732",
  appId: "1:254765843732:web:f438992081bdce9308ae01",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
