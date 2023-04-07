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

import { getStorage } from "firebase/storage";
// import {
//   FirebaseAuthProvider,
//   FirebaseDataProvider,
// } from "react-admin-firebase";

// interface Args {
//   email: string;
//   password: string;
// }


const firebaseConfig = {
  apiKey: process.env.firebaseApiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
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

export const storage = getStorage(app);
// export const dataProvider = FirebaseDataProvider(firebaseConfig);
// export const authProvider = FirebaseAuthProvider(firebaseConfig, {});

export { auth, createUser, doSignIn, doSignOut, doSignInWithPopup };

export default app;
