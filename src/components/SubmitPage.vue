
<template >
    <md-card>
  <md-card-media>
    <img id="image" src="https://evolvetours.com/wp-content/uploads/2016/11/montreal-canada-1050x6991.jpg" alt="People">
  </md-card-media>

  <md-card-header>
    <div class="md-title">Hi how are you?</div>

  </md-card-header>

  <md-card-content>
    <form v-on:submit.prevent="validateInput">
      <md-input-container>
        <label>First Name</label>
        <md-input v-model="firstName" required></md-input>
      </md-input-container>

      <md-input-container>
        <label>Email</label>
        <md-input placeholder="Email" v-model="email" required></md-input>
      </md-input-container>

      <md-input-container>
        <label>How are you feeling today?</label>
        <md-textarea v-model="feeling" required ></md-textarea>
      </md-input-container>

      <md-input-container>
        <label>Because...</label>
        <md-textarea v-model="story" required></md-textarea>
      </md-input-container>

      <md-button type="submit" class="md-raised md-primary">Submit</md-button>
    </form>
  </md-card-content>
</md-card>
</template>

<script>
import { makeMeAnew } from '../db'
export default {
  name: 'SubmitPage',
  data () {
    return {
      firstName: null,
      feeling: null,
      story: null,
      email: null
    }
  },
  computed: {
    hasNoSwearing: function () {
      let bannedWords = ['fuck', 'bitch', 'whore', 'shit', 'cunt', 'bastard', 'tabarnak', 'merde', 'cawliss']
      if (new RegExp(bannedWords.join('|')).test(this.firstName.toLowerCase()) || new RegExp(bannedWords.join('|')).test(this.feeling.toLowerCase()) || new RegExp(bannedWords.join('|')).test(this.story.toLowerCase())) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    validateInput: function () {
      if (this.hasNoSwearing) {
        alert('no swearing')
        makeMeAnew(this.firstName, this.feeling, this.story, this.email)
      } else {
        alert('swearing!')
        makeMeAnew(this.firstName, this.feeling, this.story, this.email)
      }
      this.firstName = null
      this.feeling = null
      this.story = null
      this.email = null
    }
  }
}
</script>
<style>
#messageBox{
background-image: url("https://evolvetours.com/wp-content/uploads/2016/11/montreal-canada-1050x6991.jpg");
background-color: lightblue;
}
#image{
  height: 14;
  width: 42;
}
</style>
