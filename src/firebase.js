import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA_snTyKdPCTepKs79Nui6gPtTQh1b8uA4",
  authDomain: "roomus-689d1.firebaseapp.com",
  projectId: "roomus-689d1",
  storageBucket: "roomus-689d1.appspot.com",
  messagingSenderId: "1000258788571",
  appId: "1:1000258788571:web:8fec8ebda354a4cc4c80fe",
  measurementId: "G-MX71HC92TY"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
