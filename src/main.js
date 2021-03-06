import { createApp } from "vue";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTachometerAlt,
  faLightbulb,
  faCogs,
  faObjectGroup,
} from "@fortawesome/free-solid-svg-icons";

library.add(faTachometerAlt, faLightbulb, faObjectGroup, faCogs);
createApp(App)
  .use(FontAwesomeIcon)
  .mount("#app");
