<template>
  <div class="step step3">
    <form data-abide novalidate id="step3">
      <div class="grid-container">
        <div class="grid-x grid-margin-x">
          <div class="cell medium-4 small-12">
            <label>Name of Bank
              <input type="text" name="bankName" required>
            </label>
          </div>
          <div class="cell medium-3 small-12">
            <label>Account Name
              <input type="text" name="accountName" required>
            </label>
          </div>
          <div class="cell medium-3 small-12">
            <label>Account Number
              <input type="number" name="accountNumber" required>
            </label>
          </div>
          <div class="cell medium-2 small-12">
            <label>Branch Code
              <input type="number" name="branchCode" required>
            </label>
          </div>
          <div class="cell medium-2 small-12">
            <label>Type of Account <select name="accountType" required>
              <option value="">Please select</option>
              <option value="Current">Current</option>
              <option value="Transmission">Transmission</option>
              <option value="Savings">Savings</option>
            </select>
            </label>
          </div>
          <div class="cell medium-2 small-12">
            <label>Years at bank
              <input type="number" name="bankDuration" required>
            </label>
          </div>
        </div>
      </div>
      <div class="grid-container">
        <div class="explanation">Trade References</div>
      </div>
      <div class="grid-container">
        <div class="grid-x grid-margin-x">
          <div class="cell medium-6 small-12">
            <label>Name
              <input type="text" name="reference1Name">
            </label>
          </div>
          <div class="cell medium-3 small-12">
            <label>Contact No
              <input type="text" name="reference1Telephone">
            </label>
          </div>
          <div class="cell medium-3 small-12">
            <label>Credit Limit
              <div class="input-group">
                <span class="input-group-label">R</span>
                <input class="input-group-field" type="number" name="reference1CreditLimit"/>
              </div>
            </label>
          </div>
          <div class="cell medium-6 small-12">
            <label>Name
              <input type="text" name="reference2Name">
            </label>
          </div>
          <div class="cell medium-3 small-12">
            <label>Contact No
              <input type="text" name="reference2Telephone">
            </label>
          </div>
          <div class="cell medium-3 small-12">
            <label>Credit Limit
              <div class="input-group">
                <span class="input-group-label">R</span>
                <input class="input-group-field" type="number" name="reference2CreditLimit"/>
              </div>
            </label>
          </div>
          <div class="cell medium-6 small-12">
            <label>Name
              <input type="text" name="reference3Name">
            </label>
          </div>
          <div class="cell medium-3 small-12">
            <label>Contact No
              <input type="text" name="reference3Telephone">
            </label>
          </div>
          <div class="cell medium-3 small-12">
            <label>Credit Limit
              <div class="input-group">
                <span class="input-group-label">R</span>
                <input class="input-group-field" type="number" name="reference3CreditLimit"/>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="grid-container">
        <div class="grid-x grid-margin-x">
          <fieldset class="cell large-6">
            <div id="doneAndDusted" class="button" @click="onDone">Done</div> OR
            <button class="button" type="submit" value="Submit">Apply for a card &gt;</button>
          </fieldset>
        </div>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
  import Step3Controller from './Step3Controller';

  export default Step3Controller;
</script>
<style scoped src="./Step3Styles.less"></style>
