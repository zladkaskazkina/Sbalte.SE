import firebase from 'firebase/app';
import 'firebase/firestore';
import config from './firebaseConfig';

// Get a Firestore instance
export const db = firebase
  .initializeApp(config)
  .firestore();