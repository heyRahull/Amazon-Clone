import firebase from "firebase";

const fireBaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAC9xzAXF97lV5LSo1OpBK_ZhXiYJvmRY0",
  authDomain: "clone-3d1bc.firebaseapp.com",
  projectId: "clone-3d1bc",
  storageBucket: "clone-3d1bc.appspot.com",
  messagingSenderId: "682004883862",
  appId: "1:682004883862:web:1c54a7bdf31664e07615b7",
});

const auth = firebase.auth();
export { auth };
