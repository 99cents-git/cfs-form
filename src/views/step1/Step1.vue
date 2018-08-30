<template>
  <div class="step step1">
    <form data-abide novalidate id="step1">
      <div data-abide-error class="alert callout" style="display: none;">
        <p><i class="fi-alert"></i> There are some errors in your form.</p>
      </div>
      <div class="grid-container">
        <div class="grid-x grid-margin-x">
          <div class="cell medium-6 small-12">
            <label>Registered Name of Business *
              <input type="text" name="registeredName" placeholder="Please enter the name of your business." required>
            </label>
          </div>
          <div class="cell medium-6 small-12">
            <label>Trading Name
              <input type="text" name="tradingName" placeholder="Please enter the trading name of your business.">
            </label>
          </div>
          <div class="cell medium-6 small-12">
            <label>Business Registration Number *
              <input type="text" name="businessRegistrationNumber" placeholder="Please enter your business registration number." required>
            </label>
          </div>
          <div class="cell medium-6 small-12">
            <label>VAT Registration Number *
              <input maxlength="12" name="vatNumber" type="text" placeholder="Please enter your VAT number." required>
            </label>
          </div>
          <!-- Business address -->
          <div class="cell medium-12">
            <label>Business Address *
              <textarea type="text" name="businessAddress" placeholder="Please enter your business address." required maxlength="200" rows="2"></textarea>
            </label>
          </div>
          <div class="cell medium-3 small-6">
            <label>Postal Code *
              <input maxlength="4" name="businessPostalCode" type="number" placeholder="Enter your postal code" required>
            </label>
          </div>
          <div class="cell medium-9 small-12">
            <label>Province * <select name="businessProvince" required id="province">
              <option value=""></option>
              <option value="Western Cape">Western Cape</option>
              <option value="Northern Cape">Northern Cape</option>
              <option value="Eastern Cape">Eastern Cape</option>
              <option value="Free State">Free State</option>
              <option value="Gauteng">Gauteng</option>
              <option value="KwaZulu-Natal">KwaZulu-Natal</option>
              <option value="Limpopo">Limpopo</option>
              <option value="Mpumalanga">Mpumalanga</option>
              <option value="North West">North West</option>
            </select>
            </label>
          </div>
          <div class="cell large-3">
            <label>Office Contact Number *
              <input maxlength="12" name="businessContactNumber" type="tel" placeholder="Enter your office contact" required>
            </label>
          </div>
          <div class="cell large-3">
            <label>Cellphone Number *
              <input maxlength="12" name="businessCellphone" type="tel" placeholder="Enter your cellphone number" required>
            </label>
          </div>
          <div class="cell large-6">
            <label>Email Address *
              <input type="email" name="businessEmailAddress" placeholder="Enter your email address" required>
            </label>
          </div>
          <!-- delivery address -->
          <div class="cell medium-12 delivery-address">
            <label>Delivery Address <a id="copy-business-address">Use my business address</a>
              <textarea type="text" name="deliveryAddress" placeholder="Please enter your delivery address." maxlength="200" rows="2"></textarea>
            </label>
          </div>
          <div class="cell medium-3 small-6">
            <label>Postal Code
              <input maxlength="4" name="deliveryPostalCode" type="number" placeholder="Enter your postal code">
            </label>
          </div>
          <div class="cell medium-9 small-12">
            <label>Province <select name="deliveryProvince" id="deliveryProvince">
              <option value=""></option>
              <option value="Western Cape">Western Cape</option>
              <option value="Northern Cape">Northern Cape</option>
              <option value="Eastern Cape">Eastern Cape</option>
              <option value="Free State">Free State</option>
              <option value="Gauteng">Gauteng</option>
              <option value="KwaZulu-Natal">KwaZulu-Natal</option>
              <option value="Limpopo">Limpopo</option>
              <option value="Mpumalanga">Mpumalanga</option>
              <option value="North West">North West</option>
            </select>
            </label>
          </div>
          <!-- meta data -->
          <div class="cell large-2">
            <label>Seating Capacity <select name="seatingCount" id="">
              <option value="0-50">0 - 50 pax</option>
              <option value="51-100">51 - 100 pax</option>
              <option value="Over 100">Over 100 pax</option>
            </select>
            </label>
          </div>
          <div class="cell large-4">
            <label>Estimated Monthly Purchases
              <div class="input-group">
                <span class="input-group-label">R</span>
                <input required class="input-group-field" type="number" name="estimatedMonthlySpend"/>
              </div>
            </label>
          </div>
          <div class="cell large-4">
            <label>Credit Required
              <div class="input-group">
                <span class="input-group-label">R</span>
                <input required class="input-group-field" type="number" name="creditLimit"/>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="grid-container">
        <div class="grid-x grid-margin-x">
          <fieldset class="cell large-6">
            <button class="button" name="submitButton" type="submit" value="Submit">Next &gt;</button>
          </fieldset>
        </div>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
  import Step1Controller from './Step1Controller';

  export default Step1Controller;
</script>
<style scoped src="./Step1Styles.less"></style>
