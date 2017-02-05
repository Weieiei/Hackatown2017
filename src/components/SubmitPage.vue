
<template >
    <md-card>
  <md-card-media>
    <img id="image" src="https://evolvetours.com/wp-content/uploads/2016/11/montreal-canada-1050x6991.jpg" alt="People">
  </md-card-media>

  <md-card-header>
    <div class="md-title">Hi how are you?</div>

  </md-card-header>



  <md-card-content>
    <form novalidate @submit.stop.prevent="submit">
      <md-input-container>
        <label>First Name</label>
        <md-input v-model="FirstName"></md-input>
      </md-input-container>

      <md-input-container>
        <label>Email</label>
        <md-input placeholder="Email"></md-input>
      </md-input-container>

      <md-input-container>
        <label>How are you feeling today?</label>
        <md-textarea></md-textarea>
      </md-input-container>

      <md-input-container>
        <label>Because...</label>
        <md-textarea></md-textarea>
      </md-input-container>

<md-button class="md-raised md-primary" v-on:click="thanks">Submit</md-button>

  </md-card-content>
</md-card>




</template>

<script>
export default {
  name: 'SubmitPage',
  methods: {
    thanks: function () {
      alert('Have a nice day!')
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
