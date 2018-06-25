<template>
  <div id="app">
    <div class="nav">
      <navigation></navigation>
    </div>
    <div class="body">
      <router-view/>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import Navigation from './components/navigation/Navigation'

export default {
  name: 'App',
  components: { Navigation },
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>