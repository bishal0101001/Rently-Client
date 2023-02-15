import { initializeApp } from "firebase/app";
import {
  UserCredential,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

// interface Args {
//   email: string;
//   password: string;
// }

const firebaseConfig = {
  apiKey: "AIzaSyBMNlSD8L4_yLJPL8rb9OlLrw2ULscXHho",
  authDomain: "rently-c812a.firebaseapp.com",
  projectId: "rently-c812a",
  storageBucket: "rently-c812a.appspot.com",
  messagingSenderId: "299731886612",
  appId: "1:299731886612:web:9df4bb0207b97d3cb27d01",
  measurementId: "G-G8JHEFMPX9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const createUser = (email: string, password: string): Promise<UserCredential> =>
  createUserWithEmailAndPassword(auth, email, password);

const doSignIn = (email: string, password: string): Promise<UserCredential> =>
  signInWithEmailAndPassword(auth, email, password);

const doSignInWithPopup = () => signInWithPopup(auth, provider);

const doSignOut = () => signOut(auth);

export { auth, createUser, doSignIn, doSignOut, doSignInWithPopup };

export default app;
