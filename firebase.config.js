// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDzsyDexsngQtfXvgGsiDMUwoMnhKjIFh0',
  authDomain: 'house-marketplace-app-6ce6f.firebaseapp.com',
  projectId: 'house-marketplace-app-6ce6f',
  storageBucket: 'house-marketplace-app-6ce6f.appspot.com',
  messagingSenderId: '1044559480919',
  appId: '1:1044559480919:web:41114752d835c084353b12',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
