import firebase from "firebase";


// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA6GnEvTTIDYk0N0NXgTxY6bjnAmlhdAnU",
    authDomain: "contact-manager-a2df6.firebaseapp.com",
    projectId: "contact-manager-a2df6",
    storageBucket: "contact-manager-a2df6.appspot.com",
    messagingSenderId: "124952258890",
    appId: "1:124952258890:web:abe505f6b1b72f9a82f9b3",
    measurementId: "G-BMPTB3QL8G"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;