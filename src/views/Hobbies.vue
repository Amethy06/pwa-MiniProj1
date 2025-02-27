<template>
  <div class="Hobbies">
    <h1>Hobbies</h1>

    <div class="hobbies-container">
      <div v-for="hobby in hobbies" :key="hobby.id" class="hobby-card">
        <div class="card-container">
          <div class="circle-container">
            <img :src="hobby.image" alt="Hobby Image" class="hobby-image" />
          </div>
          <p class="hobby-title">{{ hobby.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/views/Hobbies.css";
export default {
  name: "Hobbies",
  data() {
    return {
      isMobile: window.innerWidth <= 600,
      hobbies: [
        { id: 1, name: "Crochet", image: require("@/assets/crochet.png") },
        { id: 2, name: "Maquilhagem", image: require("@/assets/Makeup.jpg") },
        { id: 3, name: "Viajar", image: require("@/assets/Viajar.png") },
        { id: 4, name: "Surfar", image: require("@/assets/Surfar.png") },
        { id: 5, name: "Cozinhar", image: require("@/assets/Bolo.png") },
        {
          id: 6,
          name: "Desenho Digital",
          image: require("@/assets/Desenho.png"),
        },
        { id: 7, name: "Fotografia", image: require("@/assets/Foto.png") },
      ],
    };
  },
  mounted() {
    this.checkMobile();
    window.addEventListener("resize", this.checkMobile);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkMobile);
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth <= 600;
    },
  },
};
</script>
