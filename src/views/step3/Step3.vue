<template>
  <div class="step step3">
    <form data-abide novalidate id="step3">
      <div data-abide-error class="alert callout" style="display: none;">
        <p><i class="fi-alert"></i> There are some errors in your form.</p>
      </div>
      <div class="grid-container">
        <div class="grid-x grid-margin-x">
          <div class="cell medium-4 small-12">
            <label>Name of Bank
              <input type="text" name="bankName" placeholder="Please enter the name of your bank." required>
            </label>
          </div>
          <div class="cell medium-3 small-12">
            <label>Account Name
              <input type="text" name="accountName" placeholder="Please enter the account name." required>
            </label>
          </div>
          <div class="cell medium-3 small-12">
            <label>Account Number
              <input type="number" name="accountNumber" placeholder="Please enter your account number." required>
            </label>
          </div>
          <div class="cell medium-2 small-12">
            <label>Branch Code
              <input type="number" name="branchCode" required>
            </label>
          </div>
          <div class="cell medium-2 small-12">
            <label>Type of Account <select name="accountType" required>
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
      Trade References
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
                <input required class="input-group-field" type="number" name="reference1CreditLimit"/>
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
                <input required class="input-group-field" type="number" name="reference2CreditLimit"/>
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
                <input required class="input-group-field" type="number" name="reference3CreditLimit"/>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="grid-container">
        <div class="grid-x grid-margin-x">
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
    </form>
  </div>
</template>
<script lang="ts">
  import Step3Controller from './Step3Controller';

  export default Step3Controller;
</script>
<style scoped src="./Step3Styles.less"></style>
