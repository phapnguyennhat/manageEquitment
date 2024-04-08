// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { ref, child, get, set } from "firebase/database";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqIpDV2eF7e4j2mPz_lyX3NlQ3iuDtvF8",
  authDomain: "assignment-advancedprogramming.firebaseapp.com",
  databaseURL:
    "https://assignment-advancedprogramming-default-rtdb.firebaseio.com",
  projectId: "assignment-advancedprogramming",
  storageBucket: "assignment-advancedprogramming.appspot.com",
  messagingSenderId: "507756474873",
  appId: "1:507756474873:web:3110653d9ce6013ade4d28",
  measurementId: "G-M68T45GZCH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getDatabase(app);

const dbRef = ref(database);

export const getData = async () => {
  const response = await get(child(dbRef, "/"));
  const posts = await response.val();
  return posts;
};

// get(child(dbRef, "/"))
//   .then((snapshot) => {
//     if (snapshot.exists()) {
//       console.log(snapshot.val());
//     } else {
//       console.log("No data available");
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//   });

export function writeUserData(data, path) {
  set(child(dbRef, path), {
    ...data,
  });
}
