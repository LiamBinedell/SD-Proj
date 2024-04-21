<template>
    <div id="welcome">
      <div class="call-to-action">
        <h1>Funding Jungle</h1>
      </div>
      <div class="buttons">
        <button class="signup-btn">
          <router-link to="/signup" class="home">Sign Up</router-link>
        </button>
        <button class="login-btn">
          <router-link to="/login" class="home">Login In</router-link>
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Welcome",
  };
  </script>
  <style scoped>
  #welcome {
    text-align: center;
  }
  </style>