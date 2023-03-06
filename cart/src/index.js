import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './component/App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBb5JEBKDA47gn5nPaE5GEt1jdPSnvqFOc",
  authDomain: "cart-2ed42.firebaseapp.com",
  projectId: "cart-2ed42",
  storageBucket: "cart-2ed42.appspot.com",
  messagingSenderId: "696729315150",
  appId: "1:696729315150:web:062f86a82c758eebffe01f"
};

firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
