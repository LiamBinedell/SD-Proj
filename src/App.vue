<!-- <template>
  <header>
    <div id="app">
      <Logo />
    </div>
    <router-view></router-view>
  </header>
</template>

<script setup>
import { RouterView } from "vue-router";
import Logo from "./components/Logo.vue";
</script> -->

<!-- App.vue -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Your component styles */
</style>