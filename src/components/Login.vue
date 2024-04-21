<template>
    <div class="login-container">
      <h1 class="title">Login</h1>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <!-- <label for="email">Email</label> -->
          <input
            class="input-group"
            type="email"
            id="email"
            v-model.trim="email"
            :class="{ invalid: !emailValid }"
            @blur="validateEmail"
            placeholder="Please enter email"
          />
          <p class="notice" v-if="!emailValid">
            Please enter a valid email address.
          </p>
        </div>
  
        <div class="form-control">
          <!-- <label for="password">Password</label> -->
          <input
            class="input-group"
            type="password"
            id="password"
            v-model.trim="password"
            :class="{ invalid: !passwordValid }"
            @blur="validatePassword"
            placeholder="Please enter password"
          />
          <p v-if="!passwordValid" class="notice">
            Please enter a valid password (min. 8 characters, 1 uppercase, 1
            lowercase, 1 number, 1 special character).
          </p>
        </div>
  
        <button class="login-btn" type="submit" :disabled="!formValid">
          Login
        </button>
        <p class="sign-up-paragraph">
          Don't have an account?
  
          <router-link to="/signup">Sign Up</router-link>
        </p>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "LogIn",
    data() {
      return {
        email: "",
        password: "",
        emailValid: true,
        passwordValid: true,
      };
    },
    computed: {
      formValid() {
        return this.emailValid && this.passwordValid;
      },
    },
    methods: {
      validateEmail() {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        this.emailValid = emailRegex.test(this.email);
      },
      validatePassword() {
        const passwordRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        this.passwordValid = passwordRegex.test(this.password);
      },
      signup() {
        this.$router.push("/SignUp");
      },
      submitForm() {
        if (this.formValid) {
          // submit form data to server
          console.log("Form submitted:", {
            email: this.email,
            password: this.password,
          });
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .title {
    font-size: 30px;
    text-align: center;
    color: #001d3d;
    font-weight: 600;
  }
  .login-container {
    background-color: #fff;
    text-align: center;
  }
 
  
  
  </style>