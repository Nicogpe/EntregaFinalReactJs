import { initializeApp } from "firebase/app";
import { productos } from "../data/asyncMock";
import { addDoc, collection, getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCGuPPynr52rR4mKedGgh8806ZI5vYPOY4",
  authDomain: "tienda-62310-df4fd.firebaseapp.com",
  projectId: "tienda-62310-df4fd",
  storageBucket: "tienda-62310-df4fd.appspot.com",
  messagingSenderId: "70212585452",
  appId: "1:70212585452:web:8df5449af01988d80422c9"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);




