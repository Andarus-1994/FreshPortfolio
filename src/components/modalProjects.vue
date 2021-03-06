<template>
  <div>
    <div class="modal">
      <img :src="require(`../assets/${img}`)" />
      <a :href="link" target="_blank">Visit</a>
      <p>{{ text }}</p>
      <div v-on:click="closeModal(id)" class="closeButton">&#10005;</div>
    </div>
    <div class="modalOverlay" v-on:click="closeModal(id)"></div>
  </div>
</template>

<script>
export default {
  name: "Modals",
  components: {},
  props: {
    id: Number,
    img: String,
    text: String,
    link: String,
    closeModal: Function,
  },
};
</script>

<style>
.modalOverlay {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.438);
  z-index: 22;
}
.modal {
  position: fixed;
  background: rgb(255, 255, 255);
  width: 50%;
  min-height: 50vh;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 10vh;
  z-index: 25;
  box-shadow: 0px 0px 10px 0px black;
  animation: enterModal 1.5s;
}
@keyframes enterModal {
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.modal a {
  padding: 10px 15px;
  font-size: 0.85rem;
  font-family: "Raleway", sans-serif;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  margin-left: 5vh;
  border: 1px solid #3ba79f;
  color: #3ba79f;
  transition: 0.6s;
}
.modal a:hover {
  background: #3ba79f;
  color: white;
}
.modal img {
  width: 100%;
  margin-bottom: 20px;
}
.modal p {
  padding: 20px;
  width: 50vh;
  margin: 0 auto;
  text-indent: 25px;
  font-size: 1rem;
  font-family: "Raleway", sans-serif;
  letter-spacing: 1px;
  line-height: 25px;
  color: #000000;
}

.modal .closeButton {
  cursor: pointer;
  width: 20px;
  margin: 0 auto;
  font-size: 1.5rem;
}
</style>
