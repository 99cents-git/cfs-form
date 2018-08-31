import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {library} from '@fortawesome/fontawesome-svg-core'
import {
  faBuilding,
  faMapMarkerAlt,
  faGlobeAfrica,
  faEnvelope,
  faAt,
  faPhone,
  faMobile,
  faUsers,
  faUserTie, faPassport, faCalendarAlt, faCheck, faTimes
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false;

library.add(faEnvelope, faMapMarkerAlt, faBuilding, faGlobeAfrica, faAt, faPhone, faMobile, faUsers, faUserTie, faPassport, faCalendarAlt, faCheck, faTimes);

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');


