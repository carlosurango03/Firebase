import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfD3d1gRjc-4kpTdWVdiVxJXI_IkDaqc4",
  authDomain: "gestion-app-f9a16.firebaseapp.com",
  projectId: "gestion-app-f9a16",
  storageBucket: "gestion-app-f9a16.appspot.com",
  messagingSenderId: "194380501246",
  appId: "1:194380501246:web:d6cb148e5e4bad31fbd5af"
};
const app = initializeApp(firebaseConfig);
export const initDatabase = getFirestore(app);
export const initStorage = getStorage(app);
export const initAuth = getAuth(app);

