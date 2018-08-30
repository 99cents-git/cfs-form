<template>
  <div class="step step2">
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
              <input name="initials" type="text" placeholder="Enter your initials" required>
            </label>
          </div>
          <div class="cell large-5 small-12">
            <label>First Name
              <input name="firstName" type="text" placeholder="Enter your first name" required>
            </label>
          </div>
          <div class="cell large-5 small-12">
            <label>Last Name
              <input name="lastName" type="text" placeholder="Enter your last name" required>
            </label>
          </div>
          <div class="cell large-7 small-12">
            <label>Designation
              <input name="designation" type="text" placeholder="Enter your designation" required>
            </label>
          </div>
          <div class="cell large-3 small-12">
            <label>ID Number
              <input name="idNumber" type="number" minlength="12" maxlength="16" placeholder="Enter your ID Number" required>
            </label>
          </div>
          <div class="cell large-2 small-12">
            <label>Date of Birth
              <input name="dateOfBirth" type="text" pattern="day_month_year" placeholder="DD/MM/YYYY" required>
            </label>
          </div>
          <div class="cell large-1 small-3">
            <input type="checkbox" required>
          </div>
          <div class="cell large-9 small-9">
            <label>By checking this box I hereby declare that, as a material warranty, I am authorised to act on behalf
              of the Applicant and to bind the Applicant’s credit, and that I have read the terms and conditions, and
              accept them as binding on me and on the Applicant. The Applicant hereby warrants that it regards the terms
              and conditions of this Agreement as binding upon it.
            </label>
          </div>
          <div class="cell large-2 small-12">
            <label>Today's date
              <input name="signedDate" type="text" pattern="day_month_year" placeholder="DD/MM/YYYY" required>
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
  import Step2Controller from './Step2Controller';

  export default Step2Controller;
</script>
<style scoped src="./Step2Styles.less"></style>
