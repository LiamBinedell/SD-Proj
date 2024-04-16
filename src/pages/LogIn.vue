<template>
    <h1>LogIn</h1>
    <form>
      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" id="email" v-model.trim="email" :class="{ invalid: !emailValid }" @blur="validateEmail" placeholder="Please enter email">
        <p v-if="!emailValid">Please enter a valid email address.</p>
      </div>

      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model.trim="password" :class="{ invalid: !passwordValid }" @blur="validatePassword" placeholder="Please enter password">
        <p v-if="!passwordValid">Please enter a valid password (min. 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character).</p>
      </div>

      <button type="submit" :disabled="!formValid">LogIn</button>
      <p>Don't have an account? <button @click="signup">Sign Up</button></p>

    </form>
</template>

<script>

export default{
    name: 'LogIn',
    data() {
    return {
      email: '',
      password: '',
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
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      this.passwordValid = passwordRegex.test(this.password);
    },
    signup() {
      this.$router.push('/SignUp');
    },
    submitForm() {
      if (this.formValid) {
        // submit form data to server
        console.log('Form submitted:'), {
          email: this.email,
          password: this.password}
        ;}
    }
}
}
</script>

<style></style>