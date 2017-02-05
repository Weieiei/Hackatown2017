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

function writeNewPost (destinationKey, niceMessage, swearing) {
  // A post entry.
  var postData = {
    destinationKey: destinationKey,
    niceMessage: niceMessage,
    swearing: swearing
  }

  // Get key for the reply
  var newPostKey = db.ref().child('niceMessages').push().key

  // Categorize reply under key of the original story author
  var updates = {}
  updates['/replies/' + destinationKey + '/' + newPostKey] = postData

  db.ref().update

  return db.ref().update(updates)
}

// Makes a new story
function makeMeAnew (firstName, feeling, story, email) {
  // The data juice needed to make a new story
  var storyData = {
    name: firstName,
    feeling: feeling,
    story: story,
    email: email
  }

  // Get new story key
  var newStoryKey = db.ref().child('niceMessages').push().key

  // Update story
  var updates = {}
  updates['/stories/' + newStoryKey] = storyData

  return db.ref().update(updates)
}

// Grabs random key
function grabComment () {
  return firebase.database().ref('stories/').once('value').then(function (snapshot) {
    // Grab all stories, pick rand
    var i = 0
    var rand = Math.floor(Math.random() * snapshot.numChildren())
    snapshot.forEach(function (snapshot) {
      if (i === rand) {
        var payload = {story_key: snapshot.key,
          name: snapshot.val().firstName,
          feeling: snapshot.val().feeling,
          story: snapshot.val().story,
          email: snapshot.val().email
        }
        return payload
      }
      i++
    })
  }
  )
}

export { writeNewPost, makeMeAnew, grabComment }
