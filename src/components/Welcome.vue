<template>
    <div id="welcome">
      <img alt="image" class="home-image" src="@/assets/logo2.png" />
      <div class="call-to-action">
        <h1>Funding Jungle</h1>
        <p>
          Seize the opportunity to transform your vision into reality. Join our
          community now and let's pioneer the future together!
        </p>
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
  .home-image {
    width: 60%;
    max-width: 250px;
    margin-bottom: 20px;
  }
  .call-to-action {
    margin-bottom: 50px;
  }
  .call-to-action h1 {
    font-size: 32px;
    margin-bottom: 10px;
    color: #021325;
    font-weight: 600;
  }
  .call-to-action p {
    font-size: 22px;
    margin-bottom: 20px;
  }
  
  .buttons {
    display: flex;
    justify-content: center;
  }
  button {
    padding: 10px 20px;
    margin: 0 10px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }
  .login-btn {
    background-color: #021325;
    color: white;
  }
  .signup-btn {
    background-color: #004d12;
    color: white;
  }
  .home {
    color: white;
  }
  </style>