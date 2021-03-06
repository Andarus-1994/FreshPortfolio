<template>
  <div class="portfolio" id="portfolio">
    <h1>Portfolio - Personal Projects</h1>
    <ul>
      <li v-on:click="displayModal(projectDetails[0].id)">
        <img src="../assets/webD.jpg" alt="blog" />
        <h3>Blog</h3>
      </li>
      <li v-on:click="displayModal(projectDetails[1].id)">
        <img src="../assets/graph.jpg" alt="Blog" />
        <h3>Recipes</h3>
      </li>
      <li v-on:click="displayModal(projectDetails[2].id)">
        <img src="../assets/shop.jpg" alt="Blog" />
        <h3>E-Commerce Shop</h3>
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
      showModal: { state: false, id: 0 },
      projectDetails: [
        {
          id: 1,
          img: "blogs.png",
          text:
            "I created the blog website only by using Front End developing framework, Vue. ",
          link: "https://andarus-1994.github.io/BlogDesign/",
        },
        {
          id: 2,
          img: "recipes.png",
          text:
            "This web application is a recipe list that helps the user to manage easier their recipes which also has a description and a list of ingredients and steps to prepare the wanted food. We can also add new recipes or ask for random ones from the fake mocked API.   ",
          link: "https://andarus-1994.github.io/Recipes/",
        },
        {
          id: 3,
          img: "shopApp.jpg",
          text:
            "This is an web application for E-Commerce (online shop) and it is created using Laravel for Back End and React for Front End. I focused mostly on creating functionality and just a bit on design. It contains the following main functionalities: creating user account/reseting user's password (via email), display products, dashboard for the admin to add / remove products, payment method (using stripe).  ",
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
  },
};
</script>

<style scoped>
.portfolio {
  background: white;
  margin-top: 100px;
  padding-bottom: 100px;
  overflow: hidden;
}
.portfolio > h1 {
  text-align: center;
  text-transform: uppercase;
  font-size: 2.5rem;
  font-family: "Heebo", sans-serif;
  margin-top: 100px;
  margin-bottom: 100px;
}

.portfolio ul {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-column-gap: 50px;
  grid-row-gap: 50px;
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
  width: 100%;
  text-align: center;
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
  opacity: 0;
}
</style>
