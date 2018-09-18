<template>
  <div class="step step2">
    <form data-abide novalidate id="step2">
      <div class="grid-container">
        <div class="grid-x grid-margin-x">
          <div class="cell large-1 small-6">
            <label for="title">Title * <select name="title" required id="title">
              <option value=""></option>
              <option value="mister">Mr</option>
              <option value="ms">Ms</option>
              <option value="mrs">Mrs</option>
              <option value="other">Other</option>
            </select>
            </label>
          </div>
          <div class="cell large-1 small-6">
            <label>Initials *
              <input name="initials" type="text" required>
            </label>
          </div>
          <div class="cell large-5 small-12">
            <label>First Name *
              <input name="firstName" type="text" required>
            </label>
          </div>
          <div class="cell large-5 small-12">
            <label>Last Name *
              <input name="lastName" type="text" required>
            </label>
          </div>
          <div class="cell large-7 small-12">
            <label>Designation *
              <div class="input-group">
                <span class="input-group-label"><font-awesome-icon icon="user-tie" size="lg"/></span>
                <input class="input-group-field" name="designation" type="text" required>
              </div>
            </label>
          </div>
          <div class="cell large-3 small-12">
            <label>ID Number *
              <div class="input-group">
                <span class="input-group-label"><font-awesome-icon icon="passport" size="lg"/></span>
                <input class="input-group-field" name="idNumber" type="number" minlength="13" maxlength="13" placeholder="13-digit Number" required>
              </div>
            </label>
          </div>
          <div class="cell large-2 small-12">
            <label>Date of Birth *
              <div class="input-group">
                <span class="input-group-label"><font-awesome-icon icon="calendar-alt" size="lg"/></span>
                <input name="dateOfBirth" class="input-group-field" type="text" pattern="day_month_year" placeholder="DD/MM/YYYY" required>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="grid-container">
        <div class="explanation">
          In order to process your application, you will need to upload the following supporting documents:
          <ul>
            <li>
              <span class="list-done" :class="idDone ? 'done' : 'not-done'"><font-awesome-icon :icon="!idDone ? 'times' : 'check'"/></span>
              Copy or photo of your green, barcoded ID
            </li>
            <li>
              <span class="list-done" :class="residenceDone ? 'done' : 'not-done'"><font-awesome-icon :icon="!residenceDone ? 'times' : 'check'"/></span>
              Proof of residence
            </li>
            <li>
              <span class="list-done" :class="bankDone ? 'done' : 'not-done'"><font-awesome-icon :icon="!bankDone ? 'times' : 'check'"/></span>
              Proof of bank details (cancelled cheque or letter from bank or bank statement)
            </li>
          </ul>
        </div>
        <div class="grid-x grid-margin-x">
          <div class="cell large-3 small-6 ">
            <label for="idDocumentUpload" class="button">Upload ID Document</label>
            <input @change="handleFileUpload" type="file" id="idDocumentUpload" class="show-for-sr">
          </div>
          <div class="cell large-3 small-6 ">
            <label for="residenceUpload" class="button">Upload Proof of Residence</label>
            <input @change="handleFileUpload" type="file" id="residenceUpload" class="show-for-sr">
          </div>
          <div class="cell large-3 small-6 ">
            <label for="bankUpload" class="button">Upload Proof of Banking</label>
            <input @change="handleFileUpload" type="file" id="bankUpload" class="show-for-sr">
          </div>
        </div>
      </div>
      <div class="grid-container terms-wrapper">
        <div class="grid-x grid-margin-x">
          <div class="cell large-10 small-9">
            <label class="checkbox-label">
              <input type="checkbox" required>
              By checking this box I hereby declare that, as a material warranty, I am authorised to act on behalf of
              the Applicant and to bind the Applicant’s credit, and that I have read the terms and conditions, and
              accept them as binding on me and on the Applicant. The Applicant hereby warrants that it regards the terms
              and conditions of this Agreement as binding upon it.
            </label>
          </div>
          <div class="cell large-2 small-12">
            <label>Today's date *
              <div class="input-group">
                <span class="input-group-label"><font-awesome-icon icon="calendar-alt" size="lg"/></span>
                <input class="input-group-field" name="signedDate" type="text" pattern="day_month_year" placeholder="DD/MM/YYYY" required>
              </div>
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
