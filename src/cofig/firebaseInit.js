import { initializeApp } from "firebase/app";
import firebaseConfig from './config.firebase';

// Initialize Firebase

const firebaseInit = () => initializeApp(firebaseConfig);

export default firebaseInit;