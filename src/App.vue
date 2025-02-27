<template>
  <div id="app">
    <div id="nav">
      <div class="nav-container">
        <div class="logo">
          <img src="@/assets/LogoAmethy.svg" alt="Logo" />
        </div>

        <div class="nav-links">
          <router-link to="/">Quem Sou?</router-link> |
          <router-link to="/OQueFaco">O Que Faço?</router-link> |
          <router-link to="/Hobbies">Hobbies</router-link>
        </div>
      </div>
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import "@/App.css";

export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>
