<template >
  <md-tabs md-fixed>
    <md-tab id="submitPage" md-label="Submit">
        <md-card class="md-primary">
          <md-whiteframe md-elevation="3" id="frame">
            <div>
              <md-card-header>
                <div class="md-title">Hi.</div>
                <div class="md-title">How are you?</div>
              </md-card-header>

              <md-card-content>
                <form v-on:submit.prevent="validateInput">
                  <md-input-container>
                    <label class="words">First Name</label>
                    <md-input v-model="firstName" required></md-input>
                  </md-input-container>

                  <md-input-container>
                    <label class="words">Email</label>
                    <md-input v-model="email" required></md-input>
                  </md-input-container>

                  <md-input-container>
                    <label class="words">How are you feeling today?</label>
                    <md-textarea v-model="feeling" required ></md-textarea>
                  </md-input-container>

                  <md-input-container>
                    <label class="words">Because...</label>
                    <md-textarea v-model="story" required></md-textarea>
                  </md-input-container>

                  <md-button type="submit" class="md-raised md-primary">Submit</md-button>
                  <md-button class="md-raised md-primary" v-on:click="clearAll">Clear All</md-button>
                </form>
              </div>
            </md-card-content>
        </md-whiteframe>
        <md-card>
        </md-card>
        <md-card>
          <md-card-content>
            <span class="md-display-2">{{ this.message2 == null ? "" : "Somebody replied!" }}</span>
            <md-card-content>
            </md-card-content>
          </md-card-content>
          <md-card-content>
            <span class="md-display-1">{{ this.message2 == null ? "" : this.message2}}</span>
          </md-card-content>
        <md-card>
      </md-card>
    </md-tab>
    <md-tab id="reply" md-label="Reply">
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
              <span class="md-display-1">{{username}} is feeling {{replyFeeling}} </span>
              <span class="md-display-1"> because {{otherStory}}</span>
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
              <form novalidate @submit.stop.prevent="validateInputRep">
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
    </md-tab>
  </md-tabs>
</template>

<script>
import { makeMeAnew, writeNewPost } from '../db'
import ReplyPage from './ReplyPage'
export default {
  name: 'SubmitPage',
  components: {
    ReplyPage
  },
  data () {
    return {
      firstName: null,
      feeling: null,
      story: null,
      email: null,
      submitted: false,
      username: '',
      replyFeeling: '',
      otherStory: '',
      message: null,
      message2: null
    }
  },
  computed: {
    hasSwearing: function () {
      let bannedWords = ['fuck', 'bitch', 'whore', 'shit', 'cunt', 'bastard', 'tabarnak', 'merde', 'cawliss']
      if (new RegExp(bannedWords.join('|')).test(this.firstName.toLowerCase()) || new RegExp(bannedWords.join('|')).test(this.feeling.toLowerCase()) || new RegExp(bannedWords.join('|')).test(this.story.toLowerCase())) {
        return true
      } else {
        return false
      }
    },
    dangerFlag: function () {
      let dangerWords = ['suicide', 'bully', 'rape', 'abuse', 'kill', 'die', 'shoot', 'gun', 'murder', 'danger', 'suicid']
      if (new RegExp(dangerWords.join('|')).test(this.story.toLowerCase()) || new RegExp(dangerWords.join('|')).test(this.feeling.toLowerCase())) {
        return true
      } else {
        return false
      }
    },
    hasSwearingRep: function () {
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
      makeMeAnew(this.firstName, this.feeling, this.story, this.email, this.hasSwearing, this.dangerFlag)
      if (this.dangerFlag) {
        alert('This seems serious. You should call 514-723-4000')
      } else if (!this.hasSwearing) {
        alert('Have a nice day! Please press Clear All when you receive a message of support.')
      }
      if (!this.hasSwearing) {
        this.username = this.firstName
        this.replyFeeling = this.feeling
        this.otherStory = this.story
      }
      if (this.hasSwearing) {
        this.firstName = null
        this.feeling = null
        this.story = null
        this.email = null
        alert('Have a nice day :)')
      }
    },
    validateInputRep: function () {
      alert('Thank you for supporting ' + this.username + '!')
      writeNewPost(this.username, this.message, this.hasSwearingRep)
      this.username = null
      // this. = null
      this.replyFeeling = null
      this.message2 = this.message
      this.message = null
    },
    clearAll: function () {
      this.firstName = null
      this.feeling = null
      this.story = null
      this.email = null
      this.username = null
      this.replyFeeling = null
      this.message = null
      this.otherStory = null
      this.message2 = null
    }
  }
}
</script>
<style>
#messageBox{
background-image: url("https://evolvetours.com/wp-content/uploads/2016/11/montreal-canada-1050x6991.jpg");
background-color: lightblue;
}

.md-primary{
  background-image: url("https://evolvetours.com/wp-content/uploads/2016/11/montreal-canada-1050x6991.jpg");


}

#frame{
  background-color: rgba(105,100,100,0.65);
  padding-left: 10%;
  padding-right:30%;
}

.words{
  color: white !important;
}
</style>
