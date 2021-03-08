<template>
  <Loader v-if="!loadPage" />
  <div class="content" v-if="loadPage">
    <main-header />
    <Menu />
    <About />
    <Portfolio />
    <Contact />
  </div>
</template>

<script>
import MainHeader from "./components/mainHeader.vue";
import Menu from "./components/menu.vue";
import About from "./components/about.vue";
import Portfolio from "./components/portfolio.vue";
import Contact from "./components/contact.vue";
import Loader from "./components/loaderPage.vue";
export default {
  name: "App",
  components: {
    MainHeader,
    Menu,
    About,
    Portfolio,
    Contact,
    Loader,
  },
  data() {
    return {
      loadPage: false,
    };
  },
  mounted() {
    document.onreadystatechange = () => {
      setTimeout(() => {
        if (document.readyState == "complete") {
          this.loadPage = true;
        }
      }, 3000);
    };
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  background-color: rgb(240, 238, 238);
  box-sizing: border-box;
  overflow-x: hidden;
  padding: 0;
  margin: 0;
  z-index: -10;
}

.content {
  animation: fadeIn 1s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes enter {
  0% {
    opacity: 0;
    transform: translateX(-200px);
  }
  10% {
    opacity: 0;
    transform: translateX(-200px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}

@keyframes figure1 {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes figure2 {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes figure3 {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes figure4 {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes rotateEnter {
  0% {
    transform: rotateY(100deg);
  }
  20% {
    transform: rotateY(100deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}

@keyframes fillBar {
  0% {
    transform: translateX(-200px);
  }
  25% {
    transform: translateX(-200px);
  }
  100% {
    transform: translateX(0px);
  }
}

@keyframes climbDown {
  0% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
