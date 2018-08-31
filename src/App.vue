<template>
  <div id="app">
    <div id="nav">
      <router-link v-for="formstep in underlyingData.status" :class="{done: formstep.complete}" :to="formstep.nextStep"><span class="display-name">{{formstep.stepDisplayName}}</span><span v-if="formstep.complete" class="done-icon"><font-awesome-icon icon="check"/></span></router-link>
    </div>

    <div id="pages">
      <transition name="fade" class="animated" :enter-active-class="inClass" :leave-active-class="outClass">
        <router-view v-on:step-invalid="markStepInvalid" v-on:step-valid="markStepValid" v-on:step-done="markStepComplete" v-on:step-notdone="markStepIncomplete" v-on:on-submit="saveStepData" :form-data="fetchAllFormData"/>
      </transition>
    </div>
  </div>
</template>
<style src="./AppStyles.less"></style>
<script lang="ts">
  import AppController from './AppController';
  export default AppController;
</script>
