<template>
  <div class="step step4">
    <form data-abide novalidate id="step4">
      <div data-abide-error class="alert callout" style="display: none;">
        <p><i class="fi-alert"></i> There are some errors in your form.</p>
      </div>
      <div class="grid-container">
        <div class="grid-x grid-margin-x">
          <div class="cell medium-4 small-12">
            <label>Display name on card
              <input type="text" name="cardDisplayName">
            </label>
          </div>
          <div class="cell medium-2 small-12">
            <label>Send SMSs to
              <div class="input-group">
                <span class="input-group-label"><font-awesome-icon icon="mobile" size="lg"/></span>
                <input class="input-group-field" type="number" name="cardSMS">
              </div>
            </label>
          </div>
          <div class="cell medium-4 small-12">
            <label>Send emails to
              <div class="input-group">
                <span class="input-group-label"><font-awesome-icon icon="at" size="lg"/></span>
                <input type="email" class="input-group-field" name="cardEmail"  required>
              </div>
            </label>
          </div>
          <div class="cell medium-2 small-12">
            <div class="cell medium-3 small-12">
              <label>Purchase Limit
                <div class="input-group">
                  <span class="input-group-label">R</span>
                  <input required class="input-group-field" type="number" name="cardPurchaseLimit"/>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="grid-container">
        <div class="cell large-12">CFS Business cardholders get 2,5% off all in-store purchases when they top up their
                                   stock at any Shoprite, Checkers, Liquorshop or House & Home. Read more at
                                   www.checkersfs.co.za. Money Market services, stamps and gift vouchers not included.
        </div>
      </div>
      <div class="grid-container terms-wrapper">
        <div class="grid-x grid-margin-x">
          <div class="cell large-10 small-9">
            <label class="checkbox-label">
              <input type="checkbox" required>
              By signing above, the client accepts and agrees to the terms and conditions. The debit order for the Buying Card will be deducted on the 1st of every calendar month. The reference “CFS” will reflect on your bank account.
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
            <button class="button" name="submitButton" type="submit" value="Submit">Submit Form</button>
          </fieldset>
        </div>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
  import Step4Controller from './Step4Controller';

  export default Step4Controller;
</script>
<style scoped src="./Step4Styles.less"></style>
