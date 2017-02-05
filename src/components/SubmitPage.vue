
<template >


  <md-card class="md-primary">
<md-whiteframe md-elevation="3" id="frame">


  <md-card-header>
    <div class="md-title">Hi how are you?</div>

  </md-card-header>

  <md-card-content>
    <form v-on:submit.prevent="validateInput">
      <md-input-container>
        <label class="words">First Name</label>
        <md-input v-model="firstName" required></md-input>
      </md-input-container>

      <md-input-container>
        <label class="words">Email</label>
        <md-input v-model="Email" required></md-input>
      </md-input-container>

      <md-input-container>
        <label class="words">How are you feeling today?</label>
        <md-textarea v-model="feeling" required ></md-textarea>
      </md-input-container>

      <md-input-container>
        <label class="words">Because...</label>
        <md-textarea v-model="story" required></md-textarea>
      </md-input-container>

<md-button type="submit" class="md-raised md-primary" v-on:click="thanks">Submit</md-button>
  </md-card-content>
  </md-whiteframe>
</md-card>
</template>

<script> // import { makeMeAnew } from '../db'
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
  methods: {
    thanks: function () {
      alert('Have a nice day ' + this.firstName + ' who is feeling ' + this.feeling + ' because of ' + this.story)
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
  background-color: rgba(105,100,100,0.7);
  padding-left: 10%;
  padding-right:30%;

}
.words{
  font: white;
}
</style>
