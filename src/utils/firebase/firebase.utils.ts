import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    User,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { 
    doc,
    getDoc,
    setDoc,
    getFirestore,
    DocumentReference,
} from "firebase/firestore";

type UserData = {
    displayName: string | null;
    email: string | null;
    createdAt: Date;
};

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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
export const db = getFirestore();

/**
 * Creates or retrieves a user document from Firestore.
 * @param userAuth - The authenticated user object.
 * @returns A Promise<void>
 */
export const createUserDocumentFromAuth = async (userAuth: User, additionalInfo: Record<string, any> = {}): Promise<DocumentReference<UserData> | void> => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid) as DocumentReference<UserData>;
    const userSnapShot = await getDoc(userDocRef);

    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            });
        } catch (error) {
            console.error('Error creating user: ', (error as Error).message);
        }
    }
    return userDocRef;
}


/**
 * Creates a user with email and password.
 * @param email - The email of the user.
 * @param password - The password of the user.
 * @returns A Promise<User | void>
 */
export const createAuthUserWithEmailAndPassword = async (email: string, password: string): Promise<User | void> => {
    try {
        if (!email || !password) return;

        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        return user;
    } catch (error) {
        console.error('Error creating user: ', (error as Error).message);
    }
}
