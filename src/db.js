import firebase from 'firebase'

// Config to Fred's Firebase
const config = {
  apiKey: 'AIzaSyBvnEO9_-7htT1TRaxlKnqnUxPDCHLkTmg',
  authDomain: 'bubbles-3f621.firebaseapp.com',
  databaseURL: 'https://bubbles-3f621.firebaseio.com',
  storageBucket: 'bubbles-3f621.appspot.com',
  messagingSenderId: '657541199940'
}
firebase.initializeApp(config)
const db = firebase.database()

function writeNewPost (name, niceMessage, swearing) {
  // A post entry.
  var postData = {
    name: name,
    niceMessage: niceMessage,
    swearing: swearing
  }

  // Get a key for a new Post.
  var newPostKey = db.ref().child('niceMessages').push().key

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {}
  updates['/niceMessages/' + newPostKey] = postData
  updates['/people-niceMessages/' + name + '/' + newPostKey] = postData

  return db.ref().update(updates)
}
export { writeNewPost }
