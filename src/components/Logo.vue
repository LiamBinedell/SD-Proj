<template>
    <div class="logo-header">
      <img alt=" logo" class="logo-header-image" src="@/assets/logo.png" />
  
      <p>Bridging Futures!</p>
    </div>
  </template>
  <script>
  export default {
    name: "Logo",
  };
  </script>
  
  <style scoped>
  .logo-header {
    display: flex;
    align-items: center;
    position: relative;
    top: 20px;
    right: 20px;
  }
  .logo-header img {
    width: 200px;
    height: auto;
    margin-right: 10px;
  }
  .logo-header p {
    font-size: 20px;
    font-weight: bold;
  }
  </style>