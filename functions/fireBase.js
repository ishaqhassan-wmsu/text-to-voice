var fireBase = fireBase || firebase;
var hasInit = false;
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCNyRm0mg-zWmwI_VxkezgE8LOFUnfGIGE",
    authDomain: "html-firebase-tut-6d3b8.firebaseapp.com",
    databaseURL: "https://html-firebase-tut-6d3b8.firebaseio.com",
    projectId: "html-firebase-tut-6d3b8",
    storageBucket: "html-firebase-tut-6d3b8.appspot.com",
    messagingSenderId: "253080817935",
    appId: "1:253080817935:web:730d955b33a719264c2e7a"
  };
  // Initialize Firebase
  if(!hasInit){
  firebase.initializeApp(firebaseConfig);
  hasInit = true;
}

 