import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCMQR-u9LTy94no6Oc0soMoL8q9cgkZ7JA",
  authDomain: "clothingecommerce-2977e.firebaseapp.com",
  databaseURL: "https://clothingecommerce-2977e.firebaseio.com",
  projectId: "clothingecommerce-2977e",
  storageBucket: "clothingecommerce-2977e.appspot.com",
  messagingSenderId: "220366902725",
  appId: "1:220366902725:web:54442868099b8e123127ac",
  measurementId: "G-CSKF5009FY",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
