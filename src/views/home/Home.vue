<template>
  <div class="step1">
    <form data-abide novalidate id="step1">
      <div data-abide-error class="alert callout" style="display: none;">
        <p><i class="fi-alert"></i> There are some errors in your form.</p>
      </div>
      <div class="grid-container">
        <div class="grid-x grid-margin-x">
          <div class="cell medium-6 small-12">
            <label>Registered Name of Business *
              <input type="text" placeholder="Please enter the name of your business." aria-describedby="businessNameHint" required>
            </label>
          </div>
          <div class="cell medium-6 small-12">
            <label>Trading Name
              <input type="text" placeholder="Please enter the name of your business.">
            </label>
          </div>
          <div class="cell medium-6 small-12">
            <label>Business Registration Number *
              <input type="text" placeholder="Please enter your business registration number." required>
            </label>
          </div>
          <div class="cell medium-6 small-12">
            <label>VAT Registration Number *
              <input maxlength="12" type="text" placeholder="Please enter your VAT number." required>
            </label>
          </div>
          <!-- Business address -->
          <div class="cell medium-12">
            <label>Business Address *
              <textarea type="text" name="business_address" placeholder="Please enter your business address." required maxlength="200" rows="2"></textarea>
            </label>
          </div>
          <div class="cell medium-3 small-6">
            <label>Postal Code *
              <input maxlength="4" type="number" placeholder="Enter your postal code" required>
            </label>
          </div>
          <div class="cell medium-9 small-12">
            <label>Province * <select name="province" required id="province">
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
              <input maxlength="12" type="tel" placeholder="Enter your office contact" required>
            </label>
          </div>
          <div class="cell large-3">
            <label>Cellphone Number *
              <input maxlength="12" type="tel" placeholder="Enter your cellphone number" required>
            </label>
          </div>
          <div class="cell large-6">
            <label>Email Address *
              <input type="email" placeholder="Enter your email address" required>
            </label>
          </div>
          <!-- delivery address -->
          <div class="cell medium-12 delivery-address">
            <label>Delivery Address <a id="copy-business-address">Use my business address</a>
              <textarea type="text" name="delivery_address" placeholder="Please enter your delivery address." maxlength="200" rows="2"></textarea>
            </label>
          </div>
          <div class="cell medium-3 small-6">
            <label>Postal Code
              <input maxlength="4" type="number" placeholder="Enter your postal code">
            </label>
          </div>
          <div class="cell medium-9 small-12">
            <label>Province <select name="province" id="deliveryProvince">
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
          <fieldset class="cell large-4">
            <legend>Seating Capacity</legend>
            <input type="radio" name="seating" value="zero-to-fifty" id="zero">
            <label for="zero">0 - 50</label>
            <input type="radio" name="seating" value="fifty-to-hundred" id="fifty" required>
            <label for="fifty">51 - 100</label>
            <input type="radio" name="seating" value="over-hundred" id="hundred">
            <label for="hundred">Over 100</label>
          </fieldset>
          <div class="cell large-4">
            <label>Estimated Monthly Purchases
              <div class="collapse">
                <div class="small-3 large-2 columns">
                  <span class="prefix">R</span>
                </div>
                <div class="small-9 large-10 columns">
                  <input type="number" name="estimated_spend" placeholder="Estimated monthly spend" required maxlength="7" id="estimated-spend">
                </div>
              </div>
            </label>
          </div>
          <div class="cell large-4">
            <label>Credit Limit Required
              <div class="collapse">
                <div class="small-3 large-2 columns">
                  <span class="prefix">R</span>
                </div>
                <div class="small-9 large-10 columns">
                  <input type="number" name="credit_limit" placeholder="Credit limit required" required maxlength="7" id="credit-limit">
                </div>
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
  import HomeController from './HomeController';
  export default HomeController;
</script>
<style scoped src="./HomeStyles.less"></style>
