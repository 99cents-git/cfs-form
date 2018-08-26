<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <transition name="fade" enter-active-class="animated slideInLeft"
    leave-active-class="animated slideOutRight" >
      <router-view/>
    </transition>
  </div>
</template>
<style scoped src="./AppStyles.less"></style>
