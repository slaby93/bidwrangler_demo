import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyC0WBcoxiGTOiMPf6ylA9z-9UAGsHLXtq8',
  authDomain: 'bidwrangler-3455f.firebaseapp.com',
  databaseURL: 'https://bidwrangler-3455f.firebaseio.com',
  projectId: 'bidwrangler-3455f',
  storageBucket: 'bidwrangler-3455f.appspot.com',
  messagingSenderId: '531381956493',
});

export const auth = firebase.auth();
export const database = firebase.database();

export default firebaseApp;

