<template>
  <div class="lines">
    <div v-for="n in number" :key="n" class="line" :style="styleLine()"></div>
  </div>
</template>

<script>
export default {
  name: "lines",
  props: {
    number: Number,
  },

  methods: {
    random(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    styleLine() {
      return {
        top: this.random(-30, -80) + "vh",
        left: this.random(10, 100) + "%",
        animationDelay: this.random(0, 4) + "s",
        animationDuration: this.random(20, 30) + "s",
      };
    },
  },
};
</script>

<style>
.lines .line {
  position: absolute;
  background: #696969;
  transform: rotate(30deg);
  height: 120vh;
  width: 1px;
  animation: coloring infinite;
  z-index: 0;
}

@keyframes coloring {
  0% {
    background: #727272;
    transform: translate(0, 0) rotate(30deg);
  }
  30% {
    transform: translate(0px, 80px) rotate(30deg);
  }
  70% {
    transform: translate(200px, 0px) rotate(30deg);
  }
  100% {
    background: #5a5a5a;
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

@media screen and (max-width: 992px) {
  .lines {
    display: none;
  }
}
</style>
