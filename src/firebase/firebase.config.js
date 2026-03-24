
import { initializeApp } from "firebase/app";

const firebaseConfig = {
   apiKey: "AIzaSyAVMOXOOmwsbdVLLIL11z8qfMyDGnX1vlI",
  authDomain: "best-resume-project.firebaseapp.com",
  projectId: "best-resume-project",
  storageBucket: "best-resume-project.firebasestorage.app",
  messagingSenderId: "799350772332",
  appId: "1:799350772332:web:8baa980970d1654b39fe49",
  measurementId: "G-Q9P59BPQFC"
  
  
};


const app = initializeApp(firebaseConfig);

export {app}