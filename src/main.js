import { createApp } from "vue";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTachometerAlt,
  faLightbulb,
  faCogs,
  faObjectGroup,
  faArrowRight,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import VueSmoothScroll from "vue3-smooth-scroll";

library.add(
  faTachometerAlt,
  faLightbulb,
  faObjectGroup,
  faCogs,
  faArrowRight,
  faExternalLinkAlt
);
createApp(App)
  .use(FontAwesomeIcon)
  .use(VueSmoothScroll, {
    duration: 800,
    updateHistory: false,
  })
  .mount("#app");
