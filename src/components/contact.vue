<template>
  <div class="overlayContact">
    <div class="contact" id="contact">
      <h2>Contact me</h2>
      <form
        action="https://formsubmit.co/acf3b2a9b05e4db68092254332484333"
        method="POST"
      >
        <input
          type="hidden"
          name="_next"
          value="https://andarus-1994.github.io/FreshPortfolio/"
        />
        <label>Name</label>
        <input type="text" name="name" required />
        <label>Email</label>
        <input type="email" name="email" required />
        <label>Your message</label>
        <textarea type="text" name="message" required />
        <button type="submit">Send</button>
      </form>
      <div class="ArrowUp" v-on:click="scrollToTop" v-smooth-scroll>
        <p>&#8607;</p>
      </div>
    </div>
    <div class="bottomContact">
      <p>O. Andrei - <span>&#169; 2020</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  components: {},
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style>
.overlayContact {
  background: white;
  padding-top: 50px;
}
.contact {
  position: relative;
  padding-top: 20vh;
  padding-bottom: 10vh;
  background: #242833;
  clip-path: polygon(
    0 0,
    0 43%,
    0 100%,
    20% 100%,
    64% 100%,
    80% 100%,
    100% 100%,
    100% 48%,
    100% 0,
    50% 15%
  );
}
.contact h2 {
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-size: 2.5rem;
  font-family: "Heebo", sans-serif;
  margin-bottom: 100px;
  animation: enter 2s;
}

.contact form {
  display: flex;
  width: 40vh;
  min-width: 300px;
  margin: 0 auto;
  flex-direction: column;
}

.contact label {
  color: white;
  font-family: "Raleway", sans-serif;
  margin-top: 15px;
}

.contact input {
  background: #2f3442;
  color: white;
  padding: 5px 5px;
  border: none;
}
.contact textarea {
  background: #2f3442;
  border: none;
}
.contact button {
  cursor: pointer;
  background: #3b4153;
  font-family: "Raleway", sans-serif;
  font-size: 1rem;
  border: 0;
  padding: 10px 15px;
  width: 60%;
  margin: 0 auto;
  margin-top: 30px;
  transition: 0.4s;
}
.contact button:hover {
  background: #2f3442;
}

.contact .ArrowUp > p {
  cursor: pointer;
  position: absolute;
  color: #5e657a;
  padding: 10px 25px;
  font-size: 3rem;
  border: 1px solid #3b4153;
  right: 20vh;
  top: 20vh;
  transition: 0.4s;
}
.contact .ArrowUp > p:hover {
  color: #737886;
  border: 1px solid #737886;
}

.bottomContact {
  background: #303544;
  height: 5vh;
  text-align: center;
  font-family: "Raleway", sans-serif;
}

.bottomContact p {
  position: relative;
  font-size: 1.5rem;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.bottomContact p span {
  color: rgb(62, 112, 112);
}

@media screen and (max-width: 992px) {
  .contact .ArrowUp > p {
    right: 1vh;
  }
}
</style>
