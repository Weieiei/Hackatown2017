<template>
  <div class="hello">
    <md-tabs md-fixed>
      <md-tab id="submitpage" md-label="submitpage">
        <submit-page></submit-page>
      </md-tab>
      <md-tab id="replypage" md-label="replypage">
        <reply-page></reply-page>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
import ReplyPage from './ReplyPage'
import SubmitPage from './SubmitPage'
export default {
  name: 'hello',
  components: {
    ReplyPage,
    SubmitPage
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
