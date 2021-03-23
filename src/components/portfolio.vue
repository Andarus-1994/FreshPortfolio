<template>
  <div class="portfolio" id="portfolio">
    <div class="triggerPortfolio" ref="triggerPortfolio"></div>
    <h1 v-if="showPortfolio">Portfolio - Personal Projects</h1>
    <ul v-if="showPortfolio">
      <li v-on:click="displayModal(projectDetails[0].id)">
        <img src="../assets/webD.jpg" alt="blog" />
        <h3>Blog</h3>
      </li>
      <li v-on:click="displayModal(projectDetails[1].id)">
        <img src="../assets/design.jpg" alt="blog" />
        <h3>Construct CO</h3>
      </li>
      <li v-on:click="displayModal(projectDetails[2].id)">
        <img src="../assets/graph.jpg" alt="Blog" />
        <h3>Recipes</h3>
      </li>
      <li v-on:click="displayModal(projectDetails[3].id)">
        <img src="../assets/webcomerce.jpg" alt="Blog" />
        <h3>E-Commerce Shop</h3>
      </li>
      <li v-on:click="displayModal(projectDetails[4].id)">
        <img src="../assets/website.jpg" alt="designWebsite" />
        <h3>Website</h3>
      </li>
    </ul>
    <div v-for="(project, index) in projectDetails" :key="index">
      <ModalProject
        :id="project.id"
        :img="project.img"
        :text="project.text"
        :link="project.link"
        :closeModal="displayModal"
        v-if="showModal.state && showModal.id === project.id"
      />
    </div>
  </div>
</template>

<script>
import ModalProject from "./modalProjects.vue";
export default {
  name: "portfolio",
  components: {
    ModalProject,
  },
  data() {
    return {
      showPortfolio: false,
      showModal: { state: false, id: 0 },
      projectDetails: [
        {
          id: 1,
          img: "blogs.png",
          text: "Blog Website. Created using VueJS. ",
          link: "https://andarus-1994.github.io/BlogDesign/",
        },
        {
          id: 2,
          img: "construct.png",
          text: "Construction Industry Website. Created using ReactJS. ",
          link: "https://andarus-1994.github.io/ConstructionCO/",
        },
        {
          id: 3,
          img: "recipes.png",
          text:
            "This web application is a recipe list that helps the user to manage easier their recipes which also has a description and a list of ingredients and steps to prepare the wanted food. We can also add new recipes or ask for random ones from the fake mocked API.   ",
          link: "https://andarus-1994.github.io/Recipes/",
        },
        {
          id: 4,
          img: "shopApp.jpg",
          text:
            "This is an web application for E-Commerce (online shop) and it is created using Laravel for Back End and React for Front End. I focused mostly on creating functionality and just a bit on design. It contains the following main functionalities: creating user account/reseting user's password (via email), display products, dashboard for the admin to add / remove products, payment method (using stripe).  ",
          link: "",
        },
        {
          id: 5,
          img: "website.jpg",
          text: "Website design graphic example.  ",
          link: "",
        },
      ],
    };
  },
  methods: {
    displayModal(id) {
      this.showModal.state = !this.showModal.state;
      this.showModal.id = id;
      console.log(this.showModal);
    },
    PortfolioTrigger() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
              this.showPortfolio = true;
            }
          });
        },
        { threshold: 1 }
      );
      observer.observe(this.$refs.triggerPortfolio);
    },
  },
  mounted() {
    this.PortfolioTrigger();
  },
};
</script>

<style scoped>
.portfolio {
  background: white;
  margin-top: 100px;
  padding-bottom: 100px;
  overflow: hidden;
  min-height: 30vh;
}

.portfolio .triggerPortfolio {
  height: 8vh;
  width: 100%;
}
.portfolio > h1 {
  text-align: center;
  text-transform: uppercase;
  font-size: 2.5rem;
  font-family: "Heebo", sans-serif;
  margin-top: 50px;
  margin-bottom: 100px;
  animation: enter 1s;
}

.portfolio ul {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  grid-auto-rows: 1fr;
  list-style-type: none;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 0px;
}

.portfolio ul li {
  position: relative;
  cursor: pointer;
  text-align: center;
  transition: 0.4s;
}

.portfolio > ul > li:nth-child(1) {
  animation: figure1 2s;
}
.portfolio > ul > li:nth-child(2) {
  animation: figure2 2.5s;
}

.portfolio > ul > li:nth-child(3) {
  animation: figure3 3s;
}

.portfolio > ul > li:nth-child(4) {
  animation: figure4 3s;
}
.portfolio ul li img {
  background: rgb(43, 115, 128);
  width: 100%;
  min-height: 300px;
  height: 100%;
  object-fit: cover;
  transition: 0.4s;
}

.portfolio ul li h3 {
  width: 100%;
  font-family: "Raleway", sans-serif;
  font-size: 1.5rem;
  text-transform: uppercase;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -190px);
  opacity: 0;
  transition: 0.6s;
}

.portfolio ul li:hover h3 {
  opacity: 1;
  transform: translate(-50%, -50%);
}

.portfolio ul li:hover img {
  opacity: 0.1;
}
</style>
