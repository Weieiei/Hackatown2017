<template>
  <div class="mainContainer">
    <md-whiteframe md-elevation="2">
      <md-card>
        <md-card-header>
          <h2 class="md-title">pplofmontreal.com</h2>
          <md-button class="md-raised md-primary" id="back"><a href="#/stm">Back</a></md-button>
        </md-card-header>
        <md-card-content>
        </md-card-content>
        <md-card-content>
          <span class="md-display-1">{{fname}} is feeling {{feelings}} </span>
          <span class="md-display-1"> because {{story}}</span>
        </md-card-content>
        <md-card-content>
        </md-card-content>
        <md-card-content>
        </md-card-content>
        <md-card-content>
        </md-card-content>
        <md-card-content>
        </md-card-content>
        <md-card-content>
          <form novalidate @submit.stop.prevent="validateInput">
            <div>Support them!</div>
            <md-input-container>
              <label>Support them!</label>
              <md-input v-model="message"></md-input>
            </md-input-container>
            <md-button class="md-raised md-primary" type="submit">Submit</md-button>
          </form>
        </md-card-content>
      </md-card>
    </md-whiteframe>
  </div>
</template>

<script>
import { writeNewPost } from '../db'
import firebase from 'firebase'
export default {
  name: 'ReplyPage',
  firebase: {
    stories: firebase.database().ref('stories/-KcBNUi3ojdTFeC7OSJP')
  },
  data () {
    return {
      username: '',
      feeling: '',
      message: '',
      latestSnapshot: null
    }
  },
  computed: {
    hasSwearing: function () {
      let bannedWords = ['fuck', 'bitch', 'whore', 'shit', 'cunt', 'bastard', 'tabarnak', 'merde', 'cawliss']
      if (new RegExp(bannedWords.join('|')).test(this.message.toLowerCase()) || new RegExp(bannedWords.join('|')).test(this.feeling.toLowerCase())) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    validateInput: function () {
      writeNewPost(this.username, this.message, this.hasSwearing)
      this.username = null
      // this.message = null
      this.feeling = null
    },
    grabComment: function () {
      firebase.database().ref('stories/').once('value', function (snap) { this.latestSnapshot = snap })
        // Grab all stories, pick rand
      return this.latestSnapshot.story
    }
  }
}
</script>
<style>
  .mainContainer{
    padding-right: 30%;
    padding-left: 10%;
  }
  #back {
    position: absolute;
    left: 1% !important;
  }
</style>
