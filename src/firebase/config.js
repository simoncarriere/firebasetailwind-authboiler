import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY, 
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init firebase services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  const googleProvider = new firebase.auth.GoogleAuthProvider()
  const githubProvider = new firebase.auth.GithubAuthProvider()
  const twitterProvider = new firebase.auth.TwitterAuthProvider()

//   //Timestamp setup
  const timestamp = firebase.firestore.Timestamp

  export  {projectFirestore, projectAuth, timestamp, googleProvider, githubProvider, twitterProvider}