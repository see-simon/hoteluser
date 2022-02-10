import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBUPSgw5FVcqegYiVJEyvZnUBbPD5o5L9c",
    authDomain: "codetripe1.firebaseapp.com",
    projectId: "codetripe1",
    storageBucket: "codetripe1.appspot.com",
    messagingSenderId: "930880363923",
    appId: "1:930880363923:web:165cda42e547d58bae5c66",
    measurementId: "G-6RN73BPSX4"
  };
  // Initialize Firebase
//   firebase.initializeApp(Config);
  // firebase.analytics();

// const storage = firebase.storage();
// const db = firebase.firestore();

// export  { storage,db , firebase as default};
let app;
if (!firebase.apps.length){
    app = firebase.initializeApp(firebaseConfig)
}
else{
    firebase.app
}
const auth = firebase .auth()

export {auth};    // remove if is not working to let the previous parts to work again