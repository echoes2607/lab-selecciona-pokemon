import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import firebase from 'firebase'
import Vuelidate from 'vuelidate'
import store from './store'


Vue.config.productionTip = false
Vue.use(Vuelidate)


var firebaseConfig = {
  apiKey: "AIzaSyC_aug2WoxnbHrUpo9IoY5xHvOIwQoYdsA",
  authDomain: "authpokemon-486e6.firebaseapp.com",
  projectId: "authpokemon-486e6",
  storageBucket: "authpokemon-486e6.appspot.com",
  messagingSenderId: "373012639198",
  appId: "1:373012639198:web:b887039e35eb14870f014f"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) =>{
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
});


