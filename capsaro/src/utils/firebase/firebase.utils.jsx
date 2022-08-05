import { initializeApp } from 'firebase/app';
import { getAuth,
signInWithRedirect,
signInWithPopup,
GoogleAuthProvider } from 'firebase/auth';

import { getFirestore, doc, getDoc,setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBnc2S0QQxy_hmg2gfqmqAN7HLF44INIr8",
    authDomain: "capraso.firebaseapp.com",
    projectId: "capraso",
    storageBucket: "capraso.appspot.com",
    messagingSenderId: "495685810950",
    appId: "1:495685810950:web:2a1b4e50dcb0b98b117c87",
    measurementId: "G-KXEB0DYQ8Z"
  };
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:"select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider);
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async(userAuth) =>{
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const {displayName , email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef , {
                displayName,
                email,
                createdAt
            });
        }catch(error){
            console.log('error creating user' , error.message);
        }
    }

    return userDocRef;
  };