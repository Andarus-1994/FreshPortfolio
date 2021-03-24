<template>
  <div class="mainHeader" id="home">
    <lines :number="20" />
    <h1>Hello, I'm <span>Andrei</span>.</h1>
    <h1>I'm a junior Web Developer.</h1>
    <a href="#portfolio">
      <div class="workButton">
        View my work <i class="fas fa-arrow-right"></i>
      </div>
    </a>
  </div>
</template>

<script>
import lines from "./linesMain.vue";
export default {
  name: "mainHeader",
  components: { lines },
};
</script>

<style scoped>
.mainHeader {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #242833;
  text-align: center;
  font-family: "Raleway", sans-serif;
  letter-spacing: 1px;
  justify-content: center;
  align-items: center;
  z-index: -5;
}
.mainHeader h1 {
  color: white;
  font-size: 3.5rem;
  z-index: 20;
}
.mainHeader a {
  text-decoration: none;
  z-index: 20;
}

.mainHeader h1 span {
  color: #59e2d9;
  transition: 0.6s;
  z-index: 20;
}

.mainHeader .workButton {
  cursor: pointer;
  margin-top: 20px;
  border: 2px solid white;
  color: white;
  padding: 10px 15px;
  transition: 0.6s;
  z-index: 10;
}

.mainHeader .workButton i {
  color: #59e2d9;
  transition: 0.6s;
  z-index: 20;
}

.mainHeader .workButton:hover {
  background: #59e2d9;
  border: 2px solid #59e2d9;
}

.mainHeader .workButton:hover i {
  color: black;
  transform: rotate(90deg);
}

@media screen and (max-width: 992px) {
  .mainHeader h1 {
    font-size: 2rem;
  }
}
</style>
