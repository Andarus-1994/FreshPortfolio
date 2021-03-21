<template>
  <div class="skillsGraph">
    <ul>
      <li v-for="(skill, index) in skills" :key="index">
        <div class="barName">{{ skill.name }}</div>
        <div class="bar">
          <div class="barFill" :style="checkWidth(skill.skill)"></div>
          <h2>{{ skill.skill * 10 }}%</h2>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SkillsGraph",
  components: {},
  props: {
    skills: Array,
  },
  methods: {
    checkWidth(skill) {
      var width = skill * 10;
      return "width:" + width + "%";
    },
  },
};
</script>

<style scoped>
ul {
  width: 500px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
}

ul li {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  font-size: 0.85rem;
}

ul li .barName {
  background: #48b6ae;
  color: white;
  width: 120px;
  padding: 10px 20px;
  text-align: center;
  text-transform: uppercase;
}

ul li .bar {
  background: rgb(216, 216, 216);
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}
ul li .barFill {
  background: #59e2d9;
  text-align: end;
  transition: 0.8s;
  animation: 4s fillBar;
}

ul li .bar h2 {
  padding: 10px 20px;
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  font-size: 0.85rem;
}
</style>
