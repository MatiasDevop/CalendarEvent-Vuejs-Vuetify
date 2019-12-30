import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import VueTextareaAutosize from 'vue-textarea-autosize';
Vue.use(VueTextareaAutosize);

import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDLOqQf-SbrJhDD5r4o3OBuhlTYOKXgYTE",
  authDomain: "vue-calendar-7f7b2.firebaseapp.com",
  databaseURL: "https://vue-calendar-7f7b2.firebaseio.com",
  projectId: "vue-calendar-7f7b2",
  storageBucket: "vue-calendar-7f7b2.appspot.com",
  messagingSenderId: "759785632630",
  appId: "1:759785632630:web:530153459f20bf5ef04057"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
     
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
