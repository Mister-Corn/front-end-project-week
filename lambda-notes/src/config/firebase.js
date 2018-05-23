import * as firebase from "firebase";

import { FirebaseConfig } from "../config/keys";
firebase.initializeApp(FirebaseConfig);

// Database
const databaseRef = firebase.database().ref();
export const notesRef = databaseRef.child("notes");

// Authorization
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();