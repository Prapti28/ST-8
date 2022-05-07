
import firebase from "firebase";

export const firebaseConfig = {
    apiKey: "AIzaSyCUL37eVYkFMIw84iAPZmxGfhjb7zNBHT4",
    authDomain: "storytelling-app-349ea.firebaseapp.com",
    projectId: "storytelling-app-349ea",
    storageBucket: "storytelling-app-349ea.appspot.com",
    messagingSenderId: "49408381123",
    appId: "1:49408381123:web:fbbe506976c857e2505276"
  };

  
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}