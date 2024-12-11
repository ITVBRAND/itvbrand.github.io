import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; // Импортируем Firebase Storage

const firebaseConfig = {
    apiKey: "AIzaSyBZXxoxr-dOuLRcb9IWSps1vaCSMrChFe4",
    authDomain: "v-brand.firebaseapp.com",
    projectId: "v-brand",
    storageBucket: "v-brand.appspot.com", // Исправляем storageBucket
    messagingSenderId: "799153273371",
    appId: "1:799153273371:web:51f07c444554e827ea16be"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app); // Инициализируем Firebase Storage

export { db, auth, storage };