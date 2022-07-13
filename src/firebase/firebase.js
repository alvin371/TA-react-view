// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyfC7gFLCOtQUvaE2fT6Rv95eIeoakoFI",
  authDomain: "gym-membership-ecdd3.firebaseapp.com",
  projectId: "gym-membership-ecdd3",
  storageBucket: "gym-membership-ecdd3.appspot.com",
  messagingSenderId: "870781738346",
  appId: "1:870781738346:web:ac9c76ae0b436fcbd8d913"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, app };
