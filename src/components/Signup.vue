<template>
    <div class="signup-container">
      <h1 class="title">Sign Up</h1>
  
      <form>
        <div class="form-control">
          <!-- <label for="name">Name</label> -->
          <input
            type="text"
            class="input-group"
            id="name"
            v-model.trim="name"
            :class="{ invalid: !nameValid }"
            @blur="validateName"
            placeholder="Please enter name"
          />
          <p class="notice" v-if="!nameValid">Please enter your name.</p>
  
          <!-- <label for="surname">Surname</label> -->
          <input
            type="text"
            class="input-group"
            id="surname"
            v-model.trim="surname"
            :class="{ invalid: !surnameValid }"
            @blur="validateSurname"
            placeholder="Please enter surname"
          />
          <p class="notice" v-if="!surnameValid">Please enter your surname.</p>
        </div>
  
        <div class="form-control">
          <!-- <label for="email">Email</label> -->
          <input
            type="email"
            class="input-group"
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
            type="password"
            id="password"
            class="input-group"
            v-model.trim="password"
            :class="{ invalid: !passwordValid }"
            @blur="validatePassword"
            placeholder="Please enter password"
          />
          <p class="notice" v-if="!passwordValid">
            Please enter a valid password (min. 8 characters, 1 uppercase, 1
            lowercase, 1 number, 1 special character).
          </p>
        </div>
  
        <div class="form-control">
          <!-- <label for="role">Role</label> -->
          <p class="notice" v-if="!roleValid">Please select your role.</p>
          <select
            class="roles"
            id="role"
            v-model="role"
            :class="{ invalid: !roleValid }"
          >
            <option value="" disabled selected>Select your role</option>
            <option value="student">Student</option>
            <option value="funding Manager">Funding Manager</option>
          </select>
        </div>
  
        <button class="signup-btn" type="submit" :disabled="!formValid">
          Sign Up
        </button>
        <p class="login-paragraph">
          Already have an Account
  
          <router-link to="/login">Login</router-link>
        </p>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "SignUp",
    data() {
      return {
        email: "",
        password: "",
        name: "",
        surname: "",
        role: "",
        emailValid: true,
        passwordValid: true,
        nameValid: true,
        surnameValid: true,
      };
    },
    computed: {
      formValid() {
        return (
          this.emailValid &&
          this.passwordValid &&
          this.nameValid &&
          this.surnameValid &&
          this.roleValid
        );
      },
      roleValid() {
        return this.role !== "";
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
      validateName() {
        this.nameValid = this.name.trim() !== "";
      },
      validateSurname() {
        this.surnameValid = this.surname.trim() !== "";
      },
      login() {
        this.$router.push("/LogIn");
      },
      submitForm() {
        if (this.formValid) {
          // submit form data to server
          console.log("Form submitted:"),
            {
              email: this.email,
              password: this.password,
            };
        }
      },
    },
  };
  </script>
  <style scoped>
  .signup-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #001d3dd3;
    text-align: center;
    margin-top: 10px;
  }
  .title {
    font-size: 30px;
    text-align: center;
    color: #001d3d;
    font-weight: 600;
  }
 
  </style>