import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {seedDatabase} from '../seed'

const config = {
    apiKey: "AIzaSyDs1JN60oOE24U9NvRJvIuMIfp84y2iFjQ",
    authDomain: "instagram-e138e.firebaseapp.com",
    projectId: "instagram-e138e",
    storageBucket: "instagram-e138e.appspot.com",
    messagingSenderId: "348028266166",
    appId: "1:348028266166:web:5550c168b1556ac0476817"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

seedDatabase(firebase)

export { firebase, FieldValue };