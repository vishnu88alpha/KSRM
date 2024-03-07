import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA5qUVuTTtdMqF_aDWMNvumyoh1DLPBPnQ",
  authDomain: "ksrm-connect.firebaseapp.com",
  projectId: "ksrm-connect",
  storageBucket: "ksrm-connect.appspot.com",
  messagingSenderId: "927679770510",
  appId: "1:927679770510:web:b445ca93dce4de82913edf"
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };