import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// const app = firebase.initializeApp({
//   apiKey: "AIzaSyA-o-o30Dxdv859JnufFkM78ARkadE5TEA",
//   authDomain: "test-67a1a.firebaseapp.com",
//   projectId: "test-67a1a",
//   storageBucket: "test-67a1a.appspot.com",
//   messagingSenderId: "829943410827",
//   appId: "1:829943410827:web:b39879bf63b9a8a706e48e",
// });
const app = firebase.initializeApp({
  apiKey: "AIzaSyDjUdmtGMcsSF4ubw09KdxSb5vhl74FOyI",
  authDomain: "block-4af6e.firebaseapp.com",
  databaseURL: "https://block-4af6e-default-rtdb.firebaseio.com",
  projectId: "block-4af6e",
  storageBucket: "block-4af6e.appspot.com",
  messagingSenderId: "345214968643",
  appId: "1:345214968643:web:8a831bbcc2b6e876b085f6"
});



var db = app.firestore();

const storage = firebase.storage();

export { db, storage };
export const auth = app.auth();
export default app;
