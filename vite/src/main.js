import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

var firebaseConfig = {
  apiKey: "AIzaSyAOzRYzvo7_2KIOc9pEg5wVubodR2-803I",
  authDomain: "egci427-finalproject-b459c.firebaseapp.com",
  projectId: "egci427-finalproject-b459c",
  storageBucket: "egci427-finalproject-b459c.appspot.com",
  messagingSenderId: "723320308365",
  appId: "1:723320308365:web:5b7e6fb0035d93a3b998c4",
  measurementId: "G-RZXTDM1H4W",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const db = firebaseApp.firestore();
createApp(App).use(router).mount("#app");
