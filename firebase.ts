// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyB4gblFUD7QyI_xAzoNf_uD6_mnHOSW4tE",
  authDomain: "app-chat-2deee.firebaseapp.com",
  projectId: "app-chat-2deee",
  storageBucket: "app-chat-2deee.appspot.com",
  messagingSenderId: "1063528263836",
  appId: "1:1063528263836:web:2e1131b9125820c437fd59",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
