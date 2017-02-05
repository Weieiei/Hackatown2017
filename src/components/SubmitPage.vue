<template >
  <md-tabs md-fixed>
    <md-tab id="submitPage" md-label="Submit">
        <md-card class="md-primary">
          <md-whiteframe md-elevation="3" id="frame">
            <div>
              <md-card-header>
                <div class="md-title">Bonjour / Hi.</div>
                <div class="md-title">Comment ça va? / How are you?</div>
                <md-button class="md-raised md-primary" id="back"><a href="#/stm">Carte/Routes</a></md-button>
              </md-card-header>

              <md-card-content>
                <form v-on:submit.prevent="validateInput">
                  <md-input-container>
                    <label class="words">Nom / First Name</label>
                    <md-input v-model="firstName" required></md-input>
                  </md-input-container>

                  <md-input-container>
                    <label class="words">Email</label>
                    <md-input v-model="email" required></md-input>
                  </md-input-container>

                  <md-input-container>
                    <label class="words">Comment allez-vous? / How are you feeling today?</label>
                    <md-textarea v-model="feeling" required ></md-textarea>
                  </md-input-container>

                  <md-input-container>
                    <label class="words">Parce que ... / Because...</label>
                    <md-textarea v-model="story" required></md-textarea>
                  </md-input-container>

                  <md-button type="submit" class="md-raised md-primary">Soumettre / Submit</md-button>
                  <md-button class="md-raised md-primary" v-on:click="clearAll">Effacer / Clear All</md-button>
                </form>
              </div>
            </md-card-content>
        </md-whiteframe>
        <md-card>
        </md-card>
        <md-card>
          <md-card-content>
            <span class="md-display-2">{{ this.message2 == null ? "" : "Quelqu'un a répondu! Somebody replied!" }}</span>
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
              <md-button class="md-raised md-primary" id="back"><a href="#/stm">Carte/Routes</a></md-button>
            </md-card-header>
            <md-card-content>
            </md-card-content>
            <md-card-content>
              <span class="md-display-1">{{username}} sent / is feeling</span>
              <span class="md-display-1" id="bold">&nbsp;{{replyFeeling}} </span>
              <span class="md-display-1"> parce que / because {{otherStory}}</span>
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
                <div>Encouragez-les / Support them!</div>
                <md-input-container>
                  <label>Support them!</label>
                  <md-input v-model="message"></md-input>
                </md-input-container>
                <md-button class="md-raised md-primary" type="submit">Soumettre / Submit</md-button>
              </form>
            </md-card-content>
          </md-card>
        </md-whiteframe>
      </div>
    </md-tab>
  </md-tabs>
</template>

<script>
import { makeMeAnew, writeNewPost, grabComment } from '../db'
import ReplyPage from './ReplyPage'
export default {
  name: 'SubmitPage',
  components: {
    ReplyPage
  },
  created: function () {
    this.grabCommento()
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
        alert('Ceci est un problème sérieux. This seems serious. Appel / call 514-723-4000')
      } else if (!this.hasSwearing) {
        alert('Bonne journée! Have a nice day! Appuyez Effacer dès que vous recevez un message. Please press Clear All when you receive a message of support.')
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
        alert('Bonne journée / Have a nice day :)')
      }
    },
    validateInputRep: function () {
      alert('Merci pour votre support! Thank you for supporting ' + this.username + '!')
      writeNewPost(this.username, this.message, this.hasSwearingRep)
      this.username = null
      this.replyFeeling = null
      this.message2 = this.message
      this.message = null
      this.otherStory = null
    },
    clearAll: function () {
      console.log(this)
      this.firstName = null
      this.feeling = null
      this.story = null
      this.email = null
      this.username = null
      this.replyFeeling = null
      this.message = null
      this.otherStory = null
      this.message2 = null
    },
    grabCommento: function () {
      var self = this
      grabComment(function (x) { self.replyFeeling = x.feeling }, function (x) { self.username = x.name }, function (x) { self.otherStory = x.story })
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

#bold{
  font-weight: bold !important;
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
