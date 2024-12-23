


import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore'; 
import { getStorage } from 'firebase/storage';

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDAsmecFFrtMfF2JB1K7_ScjaEgqbUdekk",
//   authDomain: "userpage-e716b.firebaseapp.com",
//   projectId: "userpage-e716b",
//   storageBucket: "userpage-e716b.appspot.com",
//   messagingSenderId: "443867862806",
//   appId: "1:443867862806:web:b24f329cd0097747ef2237",
//   measurementId: "G-5C17Z9QP3C"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDcZX81Yno5O16mycPmQjpAEueANQWxaC8",
  authDomain: "emsproject-f8e06.firebaseapp.com",
  databaseURL: "https://emsproject-f8e06-default-rtdb.firebaseio.com",
  projectId: "emsproject-f8e06",
  storageBucket: "emsproject-f8e06.appspot.com",
  messagingSenderId: "27666390148",
  appId: "1:27666390148:web:f5edd7902047b33766f6d1",
  measurementId: "G-EQJ2J0J25C"
};


// const firebaseConfig = {
//   apiKey: "AIzaSyDofLwyDaZW2WVDG1ZA_vmpq9nyeMLdE50",
//   authDomain: "new-1-7871d.firebaseapp.com",
//   projectId: "new-1-7871d",
//   storageBucket: "new-1-7871d.firebasestorage.app",
//   messagingSenderId: "729869662673",
//   appId: "1:729869662673:web:340d07c47d6843e6c1c8f0",
//   measurementId: "G-YPNGC29LNE"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get instances of Firebase services
const auth = getAuth(app);
const db = getFirestore(app);  // Ensure 'db' is used instead of 'firestore'
const storage = getStorage(app);

// Export Firebase services
export { auth, db, storage, signInWithEmailAndPassword, doc, getDoc };  // Export `doc` and `getDoc` functions

// // src/firebase.js

// import { initializeApp } from 'firebase/app';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDcZX81Yno5O16mycPmQjpAEueANQWxaC8",
//   authDomain: "emsproject-f8e06.firebaseapp.com",
//   databaseURL: "https://emsproject-f8e06-default-rtdb.firebaseio.com",
//   projectId: "emsproject-f8e06",
//   storageBucket: "emsproject-f8e06.appspot.com",
//   messagingSenderId: "27666390148",
//   appId: "1:27666390148:web:f5edd7902047b33766f6d1",
//   measurementId: "G-EQJ2J0J25C"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Get instances of Firebase services
// const auth = getAuth(app);
// const db = getFirestore(app);
// const storage = getStorage(app);

// // Export Firebase services
// export { auth, db, storage, signInWithEmailAndPassword };
