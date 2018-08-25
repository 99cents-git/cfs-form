<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" v-bind:my-obj="{id: 1}"/>
  </div>
</template>

<script lang="ts">
  import HomeController from './HomeController';
  export default HomeController;
</script>
