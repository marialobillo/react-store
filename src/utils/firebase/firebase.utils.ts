import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCvqRRYvricVY3Df6f7dRQdGY5752buXJQ",
    authDomain: "react-notes-aae60.firebaseapp.com",
    databaseURL: "https://react-notes-aae60.firebaseio.com",
    projectId: "react-notes-aae60",
    storageBucket: "react-notes-aae60.firebasestorage.app",
    messagingSenderId: "56448092445",
    appId: "1:56448092445:web:cd972aeb75eb1d825ab9f4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);