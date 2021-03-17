<template>
  <div class="about" id="about">
    <div class="triggerAbout" ref="aboutTrigger"></div>
    <h1 v-if="showAbout">- About -</h1>
    <ul v-if="showAbout">
      <li>
        <span
          ><p><font-awesome-icon :icon="['fas', 'tachometer-alt']" /></p
        ></span>
        <h1>Quick Load</h1>
        <p>Fast loading time and lag-free experience is my first concern.</p>
      </li>
      <li>
        <span
          ><p><font-awesome-icon :icon="['fas', 'object-group']" /></p
        ></span>
        <h1>Design</h1>
        <p>Always doing my best to create pleasant designs.</p>
      </li>
      <li>
        <span
          ><p><font-awesome-icon :icon="['fas', 'lightbulb']" /></p
        ></span>
        <h1>Intuitive</h1>
        <p>Strong preference for easy to use, intuitive UX/UI.</p>
      </li>
      <li>
        <span
          ><p><font-awesome-icon :icon="['fas', 'cogs']" /></p
        ></span>
        <h1>Dynamic</h1>
        <p>Built-in functions to make use of the site's interactivity.</p>
      </li>
    </ul>

    <SkillGraph :skills="skillList" v-if="showAbout" />
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import SkillGraph from "./skillsGraph.vue";
export default {
  name: "App",

  components: {
    FontAwesomeIcon,
    SkillGraph,
  },

  data() {
    return {
      showAbout: false,
      skillList: [
        {
          name: "HTML",
          skill: "9.5",
        },
        {
          name: "CSS",
          skill: "9",
        },
        {
          name: "JS",
          skill: "8",
        },
        {
          name: "Vue",
          skill: "8.5",
        },
        {
          name: "React",
          skill: "8",
        },
        {
          name: "Laravel",
          skill: "7",
        },
        {
          name: "Spring",
          skill: "5",
        },
        {
          name: "SCSS",
          skill: "6",
        },
      ],
    };
  },

  methods: {
    scrollTrigger() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            this.showAbout = true;
          }
        });
      });
      observer.observe(this.$refs.aboutTrigger);
    },
  },
  mounted() {
    this.scrollTrigger();
  },
};
</script>

<style scoped>
.triggerAbout {
  height: 10px;
  width: 100%;
}

.about {
  min-height: 50vh;
}
.about > h1 {
  text-align: center;
  text-transform: uppercase;
  font-size: 2.5rem;
  font-family: "Heebo", sans-serif;
  margin-top: 150px;
  margin-bottom: 100px;
  animation: enter 1s;
}

.about > ul {
  position: relative;
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 0px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  grid-auto-rows: 1fr;
  list-style-type: none;
  opacity: 1;
  padding: 0;
  text-align: center;
}

.about > ul > li:nth-child(1) {
  animation: figure1 2s;
}
.about > ul > li:nth-child(2) {
  animation: figure2 2.5s;
}

.about > ul > li:nth-child(3) {
  animation: figure3 3s;
}

.about > ul > li:nth-child(4) {
  animation: figure4 3s;
}

.about > ul li > h1 {
  font-family: "Heebo", sans-serif;
  font-weight: 600;
  color: rgb(49, 49, 49);
}
.about > ul li > span {
  background: #51d4cc;
  display: block;
  width: 50%;
  height: 80px;
  margin: 0 auto;
  clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
}
.about > ul li > span svg {
  animation: rotateEnter 4s;
}

.about > ul li > span > p {
  color: white;
  text-transform: uppercase;
  padding-top: 14px;
  font-size: 3rem;
}
.about > ul li > p {
  font-family: "Raleway", sans-serif;
  letter-spacing: 0.5px;
  font-size: 0.9rem;
  line-height: 20px;
  padding: 5px;
}
</style>
