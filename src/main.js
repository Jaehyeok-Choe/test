import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
const firebaseConfig = {
  apiKey: "AIzaSyBSwvgCz55eJNilSBTzB9eux4V_Tt3LU9k",
  authDomain: "test-8a676.firebaseapp.com",
  projectId: "test-8a676",
  storageBucket: "test-8a676.appspot.com",
  messagingSenderId: "696690019746",
  appId: "1:696690019746:web:cdf456547af002ca3376fb",
  measurementId: "G-LLLPN2GSX8",
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
