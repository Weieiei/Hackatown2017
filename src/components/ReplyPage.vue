<template>
  <div class="mainContainer">
    <md-whiteframe md-elevation="2">
      <md-card>
        <md-card-header>
          <h2 class="md-title">pplofmontreal.com</h2>
        </md-card-header>
        <md-card-content>
        </md-card-content>
        <md-card-content>
          <span class="md-display-1">{{username}} is feeling {{feeling}} </span>
          <span class="md-display-1"> because {{message}}</span>
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
            <md-button class="md-raised md-primary" type="submit">Primary</md-button>
          </form>
        </md-card-content>
      </md-card>
    </md-whiteframe>
    <input v-model="username"/>
    <input v-model="feeling"/>
  </div>
</template>

<script>
import { writeNewPost } from '../db' // updated lol
export default {
  name: 'ReplyPage',
  data () {
    return {
      username: '',
      feeling: '',
      message: null
    }
  },
  computed: {
    hasNoSwearing: function () {
      let bannedWords = ['fuck', 'bitch', 'whore', 'shit', 'cunt', 'bastard', 'tabarnak', 'merde', 'cawliss']
      if (new RegExp(bannedWords.join('|')).test(this.message.toLowerCase()) || new RegExp(bannedWords.join('|')).test(this.feeling.toLowerCase())) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    validateInput: function () {
      if (this.hasNoSwearing) {
        writeNewPost(this.username, this.message, false)
      } else {
        writeNewPost(this.username, this.message, true)
      }
      this.username = null
      this.message = null
      this.feeling = null
    }
  }
}
</script>
<style>
  .mainContainer{
    padding-right: 10%;
    padding-left: 10%;
  }
</style>
