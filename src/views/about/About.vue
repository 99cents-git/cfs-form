<template>
  <div class="step2">
    <form data-abide novalidate id="step2">
      <div data-abide-error class="alert callout" style="display: none;">
        <p><i class="fi-alert"></i> There are some errors in your form.</p>
      </div>
      <div class="grid-container">
        <div class="grid-x grid-margin-x">
          <div class="cell large-1 small-6">
            <label for="title">Title <select name="title" required id="title">
              <option value=""></option>
              <option value="mister">Mr</option>
              <option value="ms">Ms</option>
              <option value="mrs">Mrs</option>
              <option value="other">Other</option>
            </select>
            </label>
          </div>
          <div class="cell large-1 small-6">
            <label>Initials
              <input type="text" placeholder="Enter your initials" required>
            </label>
          </div>
          <div class="cell large-5 small-12">
            <label>First Name
              <input type="text" placeholder="Enter your first name" required>
            </label>
          </div>
          <div class="cell large-5 small-12">
            <label>Last Name
              <input type="text" placeholder="Enter your last name" required>
            </label>
          </div>
          <div class="cell large-7 small-12">
            <label>Designation
              <input type="text" placeholder="Enter your designation" required>
            </label>
          </div>
          <div class="cell large-3 small-12">
            <label>ID Number
              <input type="number" minlength="12" maxlength="16" placeholder="Enter your ID Number" required>
            </label>
          </div>
          <div class="cell large-2 small-12">
            <label>Date of Birth
              <input type="text" pattern="day_month_year" placeholder="DD/MM/YYYY" required>
            </label>
          </div>
        </div>
      </div>
      <div class="grid-container">
        <div class="grid-x grid-margin-x">
          <fieldset class="cell large-6">
            <button class="button" type="submit" value="Submit">Next &gt;</button>
          </fieldset>
        </div>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
  import AboutController from './AboutController';
  export default AboutController;
</script>
<style scoped src="./AboutStyles.less"></style>
