<template>
  <div>
    <nav ref="navTrigger">
      <ul>
        <a href="#home" v-smooth-scroll><li>Home</li></a>
        <a href="#about" v-smooth-scroll><li>About</li></a>
        <a href="#portfolio" v-smooth-scroll><li>Portfolio</li> </a>
        <a href="#contact" v-smooth-scroll><li>Contact</li></a>
      </ul>
    </nav>
    <div class="limit" ref="navTrigger"></div>
    <div class="nav" v-if="!showNav">
      <ul>
        <a href="#home" v-smooth-scroll><li>Home</li></a>
        <a href="#about" v-smooth-scroll><li>About</li></a>
        <a href="#portfolio" v-smooth-scroll> <li>Portfolio</li></a>
        <a href="#contact" v-smooth-scroll><li>Contact</li></a>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "menuBar",
  data() {
    return {
      showNav: true,
      scrollY: window.scrollY,
    };
  },
  methods: {
    scrollTrigger() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            this.showNav = true;
          } else {
            if (scrollY > 500) {
              this.showNav = false;
            }
          }
        });
      });
      observer.observe(this.$refs.navTrigger);
    },
  },
  mounted() {
    this.scrollTrigger();
  },
};
</script>

<style scoped>
.limit {
  width: 100%;
  height: 3vh;
}
nav {
  background: #1b242f;
  border-bottom: 3px solid #59e2d9;
  width: 100%;
}
nav a {
  text-decoration: none;
}
ul {
  list-style-type: none;
  width: 40%;
  margin-left: 40vh;
  display: flex;
  padding: 0;
}
ul li {
  cursor: pointer;
  margin-left: 40px;
  padding: 15px 10px;
  color: white;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-family: "Raleway", sans-serif;
  transition: 0.8s;
}

ul li:hover {
  color: #59e2d9;
}
.nav {
  position: fixed;
  top: 0;
  background: #1b242f;
  border-bottom: 3px solid #59e2d9;
  width: 100%;
  z-index: 20;
  animation: climbDown 1s;
}

.nav a {
  text-decoration: none;
}
@media screen and (max-width: 992px) {
  ul {
    margin-left: 0;
  }
  ul li {
    margin-left: 0px;
  }
}
</style>
