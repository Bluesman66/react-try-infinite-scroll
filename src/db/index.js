import 'firebase/firestore';
import 'firebase/storage';

import firebase from 'firebase/app';

firebase.initializeApp({
	apiKey: 'AIzaSyBb6mfuEtu8eUXz7n_AFlGxMnfHycNoA1U',
	authDomain: 'elenapaclinadolls.firebaseapp.com',
	databaseURL: 'https://elenapaclinadolls.firebaseio.com',
	projectId: 'elenapaclinadolls',
	storageBucket: 'elenapaclinadolls.appspot.com',
	messagingSenderId: '983863208338',
	appId: '1:983863208338:web:3b934b0aafc6f156c8f94b',
	measurementId: 'G-82PHE44383',
});

const db = firebase.firestore();
export default db;

const storage = firebase.storage();
export { storage };

const { Timestamp } = firebase.firestore;
export { Timestamp };
