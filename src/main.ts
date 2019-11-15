import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.vue";

import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";

// Free Font Awesome icons
// ==================================================================================================
import { library } from "@fortawesome/fontawesome-svg-core";

// https://fontawesome.com/icons?d=gallery&s=solid&m=free
import {
  faCoffee,
  faSpinner,
  faWrench,
  faAmbulance,
  faEdit,
  faCircle,
  faCheck,
  faChessQueen,
  faPlus,
  faEquals,
  faArrowRight,
  faPencilAlt,
  faComment,
  faHeadphones,
  faSquare,
  faCalendar,
  faCertificate,
  faEnvelope,
  faTimes,
  faBookmark,
  faHeart,
  faPlay,
  faSun,
  faMoon,
  faCocktail,
  faGlassMartini,
  faBeer,
  faStar
} from "@fortawesome/free-solid-svg-icons"; // 960db

// https://fontawesome.com/icons?d=gallery&s=regular&m=free
import { faAngry } from "@fortawesome/free-regular-svg-icons"; // 151db

// https://fontawesome.com/icons?d=gallery&s=brands&m=free
import {
  faJs,
  faVuejs,
  faJava,
  faPhp,
  faPython,
  faCss3,
  faHtml5,
  faFacebookF
} from "@fortawesome/free-brands-svg-icons"; // 433db

import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from "@fortawesome/vue-fontawesome";

library.add(
  faCoffee,
  faSpinner,
  faWrench,
  faAmbulance,
  faEdit,
  faCircle,
  faCheck,
  faChessQueen,
  faPlus,
  faEquals,
  faArrowRight,
  faPencilAlt,
  faComment,
  faHeadphones,
  faSquare,
  faCalendar,
  faCertificate,
  faEnvelope,
  faTimes,
  faBookmark,
  faHeart,
  faPlay,
  faSun,
  faMoon,
  faCocktail,
  faGlassMartini,
  faBeer,
  faStar,
  faJs,
  faVuejs,
  faJava,
  faPhp,
  faPython,
  faCss3,
  faHtml5,
  faFacebookF,
  faAngry
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers); // if you need layers
Vue.component("font-awesome-layers-text", FontAwesomeLayersText); // if you need layers text

// ===================================================================================================

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
