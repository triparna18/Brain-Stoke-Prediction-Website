import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB6rknQR6xJas1gvirLLC7zN88u8sJY9_M",
    authDomain: "brain-strock-app.firebaseapp.com",
    projectId: "brain-strock-app",
    storageBucket: "brain-strock-app.firebasestorage.app",
    messagingSenderId: "27306457175",
    appId: "1:27306457175:web:0423ce05b7072c4ae1cb12"
};

export const app = initializeApp(firebaseConfig);