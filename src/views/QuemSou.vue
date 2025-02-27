<template>
  <div class="QuemSou">
    <h1 class="Title">Quem Sou?</h1>
    <div class="container">
      <div class="content">
        <p>
          O meu nome é Maria Beatriz, sou natural de Vila Nova de Gaia e estou
          neste momento no mestrado de Tecnologia Multimédia, na UTAD.
        </p>
        <p>
          A minha maior paixão é o design, mais específicamente o UX/UI. Além
          disso também tenho um grande gosto pela criação de identidades
          visuais.
        </p>
        <p>
          Sabe mais sobre o meu trabalho
          <router-link to="/OQueFaco">aqui</router-link>
        </p>
      </div>
      <div class="imagem">
        <img class="Main-Logo" src="@/assets/LogoA.svg" />
      </div>
    </div>
  </div>
</template>

<script>
import "@/views/QuemSou.css";
export default {
  name: "QuemSou",
};
</script>
