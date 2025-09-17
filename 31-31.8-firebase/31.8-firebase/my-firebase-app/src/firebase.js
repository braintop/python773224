import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzhBqcn01o9phGvJyVoXVrDeff5j86fsM",
  authDomain: "testmemo-2ad0c.firebaseapp.com",
  projectId: "testmemo-2ad0c",
  storageBucket: "testmemo-2ad0c.firebasestorage.app",
  messagingSenderId: "409768253762",
  appId: "1:409768253762:web:38647b4557abf8ce0bd0db"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


