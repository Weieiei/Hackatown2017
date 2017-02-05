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
          <form novalidate @submit.stop.prevent="submit">
            <div>Support them!</div>
            <md-input-container>
              <label>Support them!</label>
              <md-input v-model="message"></md-input>
            </md-input-container>
            <md-button class="md-raised md-primary" v-on:click="greet">Primary</md-button>
          </form>
        </md-card-content>
      </md-card>
    </md-whiteframe>
    <input v-model="username"/>
  </div>
</template>

<script>
import { writeNewPost } from '../db'
export default {
  name: 'ReplyPage',
  data () {
    return {
      username: 'Amanda',
      feeling: 'Ok',
      message: null
    }
  },
  methods: {
    greet: function () {
      alert('Thanks for stuff')
      writeNewPost(this.username,
        this.message)
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
