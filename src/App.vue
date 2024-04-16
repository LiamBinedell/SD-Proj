<template>
  <div>
    <div id="app">
      <WelcomePage />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

import WelcomePage from './components/WelcomePage.vue'


export default {
  name: 'App',
  components: {
    WelcomePage
  }
};
</script>

<style>
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
