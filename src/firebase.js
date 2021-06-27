import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAtzwEMt6gD8iKp-sby_FJTTD8wXo4Rb04',
  authDomain: 'amazin-b9e18.firebaseapp.com',
  projectId: 'amazin-b9e18',
  storageBucket: 'amazin-b9e18.appspot.com',
  messagingSenderId: '343270504712',
  appId: '1:343270504712:web:3674050bb1c4b86c2994bd',
  measurementId: 'G-GQSFJTEBJX',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
