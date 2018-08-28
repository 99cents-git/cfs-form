<template>
  <div id="app">
    <div id="nav">
      <router-link :class="{done: !!step1Done}" to="/"><span>Business&nbsp;Details</span></router-link>
      <router-link :class="{done: !!step2Done}" ref="about" to="/about"><span>About</span></router-link>
      <router-link ref="contact" to="/contact"><span>Contact</span></router-link>
    </div>
    <transition name="fade" enter-active-class="animated slideInLeft"
    leave-active-class="animated slideOutRight" >
      <router-view/>
    </transition>
  </div>
</template>
<style scoped src="./AppStyles.less"></style>
<script lang="ts">
  import AppController from './AppController';
  export default AppController;
</script>
