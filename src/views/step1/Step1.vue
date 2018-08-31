<template>
  <div class="step step1">
    <form data-abide novalidate id="step1">
      <div class="grid-container">
        <div class="grid-x grid-margin-x">
          <div class="cell medium-6 small-12">
            <label>Registered Name of Business *
              <input type="text" name="registeredName" required>
            </label>
          </div>
          <div class="cell medium-6 small-12">
            <label>Trading Name
              <input type="text" name="tradingName">
            </label>
          </div>
          <div class="cell medium-6 small-12">
            <label>Business Registration Number *
              <input type="text" name="businessRegistrationNumber" required>
            </label>
          </div>
          <div class="cell medium-6 small-12">
            <label>VAT Registration Number
              <input maxlength="12" name="vatNumber" type="text" placeholder="10-digit Number">
            </label>
          </div>
          <!-- Business address -->
          <div class="cell medium-12">
            <label>Business Address *
              <textarea type="text" name="businessAddress" required maxlength="200" rows="2"></textarea>
            </label>
          </div>
          <div class="cell medium-3 small-6">
            <label>Postal Code *
              <div class="input-group">
                <span class="input-group-label"><font-awesome-icon icon="envelope" size="lg"/></span>
                <input minlength="4" maxlength="4" class="input-group-field" name="businessPostalCode" type="number" placeholder="4-digit Number" required>
              </div>
            </label>
          </div>
          <div class="cell medium-9 small-12">
            <label>Province *
              <div class="input-group">
                <span class="input-group-label"><font-awesome-icon icon="globe-africa" size="lg"/></span>
                <select class="input-group-field" name="businessProvince" required id="province">
                  <option value="">Please select your Province</option>
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
              </div>
            </label>
          </div>
          <div class="cell large-3">
            <label>Office Contact Number *
              <div class="input-group">
                <span class="input-group-label"><font-awesome-icon icon="phone" size="lg"/></span>
                <input maxlength="12" class="input-group-field" name="businessContactNumber" type="tel" placeholder="Format 27xx12345678" required>
              </div>
            </label>
          </div>
          <div class="cell large-3">
            <label>Cellphone Number *
              <div class="input-group">
                <span class="input-group-label"><font-awesome-icon icon="mobile" size="lg"/></span>
                <input maxlength="12" class="input-group-field" name="businessCellphone" type="tel" required>
              </div>
            </label>
          </div>
          <div class="cell large-6">
            <label>Email Address *
              <div class="input-group">
                <span class="input-group-label"><font-awesome-icon icon="at" size="lg"/></span>
                <input type="email" class="input-group-field" name="businessEmailAddress"  required>
              </div>
            </label>
          </div>
          <!-- delivery address -->
          <div class="cell medium-12 delivery-address">
            <label>Delivery Address <a id="copy-business-address">Use my business address</a>
              <textarea type="text" name="deliveryAddress" maxlength="200" rows="2"></textarea>
            </label>
          </div>
          <div class="cell medium-3 small-6">
            <label>Postal Code
              <div class="input-group">
                <span class="input-group-label"><font-awesome-icon icon="envelope" size="lg"/></span>
                <input maxlength="4" class="input-group-field" name="deliveryPostalCode" type="number" >
              </div>
            </label>
          </div>
          <div class="cell medium-9 small-12">
            <label>Province
              <div class="input-group">
                <span class="input-group-label"><font-awesome-icon icon="globe-africa" size="lg"/></span>
                <select class="input-group-field" name="deliveryProvince" id="delivery-province">
                  <option value="">Please select your Province</option>
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
              </div>
            </label>
          </div>
          <!-- meta data -->
          <div class="cell large-3">
            <label>Seating Capacity *
              <div class="input-group">
                <span class="input-group-label"><font-awesome-icon icon="users" size="lg"/></span>
                <select class="input-group-field" name="seatingCount" id="seating-count" required>
                  <option value=""></option>
                  <option value="0-50">0 - 50 pax</option>
                  <option value="51-100">51 - 100 pax</option>
                  <option value="Over 100">Over 100 pax</option>
                </select>
              </div>
            </label>
          </div>
          <div class="cell large-3">
            <label>Estimated Monthly Purchases *
              <div class="input-group">
                <span class="input-group-label">R</span>
                <input required class="input-group-field" type="number" name="estimatedMonthlySpend"/>
              </div>
            </label>
          </div>
          <div class="cell large-3">
            <label>Credit Required *
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
