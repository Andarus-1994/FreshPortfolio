<template>
  <div class="lines">
    <div class="line" :style="styleLinePosition2"></div>
    <div class="line" :style="styleLinePosition"></div>
    <div class="line" :style="styleLinePosition3"></div>
    <div class="line" :style="styleLinePosition4"></div>
    <div class="line" :style="styleLinePosition5"></div>
    <div class="line" :style="styleLinePosition6"></div>
  </div>
</template>

<script>
export default {
  name: "lines",
  data() {
    return {
      styleLinePosition: {
        top: "-30vh",
        left: "15%",
      },
      styleLinePosition2: {
        top: "-25vh",
        left: "30%",
        width: "0.5px",
      },
      styleLinePosition3: {
        top: "-60vh",
        left: "70%",
      },
      styleLinePosition4: {
        top: "-30vh",
        left: "80%",
        animationDelay: "5s",
      },
      styleLinePosition5: {
        top: "-30vh",
        left: "50%",
        animationDelay: "2s",
      },
      styleLinePosition6: {
        top: "-10vh",
        left: "100%",
        animationDuration: "25s",
      },
    };
  },
};
</script>

<style>
.lines .line {
  position: absolute;
  background: #535353;
  transform: rotate(30deg);
  height: 100vh;
  width: 1.5px;
  animation: coloring 20s infinite;
  z-index: 0;
}

@keyframes coloring {
  0% {
    background: #333131;
    transform: translate(0, 0) rotate(30deg);
  }
  30% {
    transform: translate(0px, 80px) rotate(30deg);
  }
  70% {
    transform: translate(200px, 0px) rotate(30deg);
  }
  100% {
    background: #696868;
    transform: translate(0px, 0px) rotate(30deg);
  }
}

.lines .line::after {
  position: absolute;
  content: "";
  background: #e92020;
  border-radius: 50%;
  width: 5px;
  height: 5px;
  bottom: 0;
  left: -2px;
}
</style>
