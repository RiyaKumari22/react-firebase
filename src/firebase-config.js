
import {getAuth} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDYIM4nIfKB5jW_wFEm2IPxWpI5kIBsQ78",
    authDomain: "react-firebase-ac786.firebaseapp.com",
    projectId: "react-firebase-ac786",
    storageBucket: "react-firebase-ac786.appspot.com",
    messagingSenderId: "949385060155",
    appId: "1:949385060155:web:246870a6bbb13332f6e11e",
    measurementId: "G-HB107HTW8X"
  };
  const app=initializeApp(firebaseConfig);
  export const firebaseAuth=getAuth(app);