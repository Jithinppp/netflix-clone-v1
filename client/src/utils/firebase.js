import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALci28M5GIfe73gxlpgLE8aM7eWeeb_SE",
  authDomain: "netflix-clone-v1-a7180.firebaseapp.com",
  projectId: "netflix-clone-v1-a7180",
  storageBucket: "netflix-clone-v1-a7180.appspot.com",
  messagingSenderId: "466304164019",
  appId: "1:466304164019:web:169573ceb9eb08b42fd0c6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// utils functions

// register user
const registerUser = async (email, password) => {
  try {
    // creating user in auth
    const res = await createUserWithEmailAndPassword(auth, email, password);
    // creating user in firestore
    await setDoc(doc(db, "users", res.user.uid), {
      uid: res.user.uid,
      email: res.user.email,
      plan: "Basic",
      paid: false,
    });
    console.log(res);
  } catch (error) {
    alert(error.message);
  }
};

// sign in user
const signInUser = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log(res);
  } catch (error) {
    alert(error.message);
  }
};

// fetch user-data from firestore
const fetchUserData = async (uid) => {
  try {
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      return userSnap.data();
    } else {
      alert("no such a doc");
    }
  } catch (error) {
    alert(error.message);
  }
};

export { auth, registerUser, signInUser, fetchUserData };
export default db;
