


const firebaseConfig = {
    apiKey: "AIzaSyDNTq6_TlzfBcqoI3sXnNGogjoRdg02YKA",
    authDomain: "tasks-7716f.firebaseapp.com",
    projectId: "tasks-7716f",
    storageBucket: "tasks-7716f.appspot.com",
    messagingSenderId: "568639499316",
    appId: "1:568639499316:web:44a8e18eccc882d4a7ee61",
    measurementId: "G-RVRLT6QZBX"
  };

  firebase.initializeApp(firebaseConfig);

  const analytics = firebase.analytics();
  var db = firebase.firestore();
var auth = firebase.auth();
