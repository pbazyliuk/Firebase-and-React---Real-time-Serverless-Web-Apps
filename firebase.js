import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: 'AIzaSyArb0AcsHgT7w6OzKPLdohkZePSosHbLjE',
    authDomain: 'first-flight-with-friend-f845f.firebaseapp.com',
    databaseURL: 'https://first-flight-with-friend-f845f.firebaseio.com',
    projectId: 'first-flight-with-friend-f845f',
    storageBucket: 'first-flight-with-friend-f845f.firebaseapp.com',
    messagingSenderId: '783329769581'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();