import firebase from 'firebase'
import Rebase from 're-base'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDFvA5uUe1a_VljXwt4sIaL8LWyws4ihsM",
  authDomain: "catch-of-the-day-b44a2.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-b44a2-default-rtdb.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base