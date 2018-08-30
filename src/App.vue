<template>
  <div id="app">
    <div id="nav">
      <router-link v-for="formstep in underlyingData.status" :class="{done: formstep.complete}" :to="formstep.nextStep"><span>{{formstep.stepDisplayName}}</span></router-link>
    </div>
    <div id="pages">
      <transition name="fade" class="animated" :enter-active-class="inClass" :leave-active-class="outClass">
        <router-view v-on:step-invalid="markStepInvalid" v-on:step-valid="markStepValid" v-on:step-done="markStepComplete" v-on:step-notdone="markStepIncomplete" v-on:on-submit="saveStepData" />
      </transition>
    </div>
  </div>
</template>
<style src="./AppStyles.less"></style>
<script lang="ts">
  import AppController from './AppController';
  export default AppController;
</script>
