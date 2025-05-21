// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// Replace with your Firebase configuration from the Firebase console
const firebaseConfig = {
  apiKey: "AIzaSyBBk_eoW4B7KwQ5W5fpEHnIfMf1GaRVY8Y",
  authDomain: "ai-agent-cad35.firebaseapp.com",
  projectId: "ai-agent-cad35",
  storageBucket: "ai-agent-cad35.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

// Export the services
export { auth, db }; 