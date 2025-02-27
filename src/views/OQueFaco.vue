<template>
  <div class="OQueFaco">
    <h1>O Que Faço?</h1>
    <div class="Work-Container">
      <div class="col">
        <p>Criação de Logótipos</p>
        <img class="work-img" src="../assets/aautadrugby.png" />
      </div>
      <div class="col">
        <p>Design de Websites</p>
        <img class="work-img" src="../assets/DKA.png" />
      </div>
      <div class="col">
        <p>Conteúdo de Redes Sociais</p>
        <img class="work-img" src="../assets/Jogo.png" />
      </div>
      <div class="col">
        <p>Ilustrações</p>
        <img class="work-img" src="../assets/ilustracoes.webp" />
      </div>
    </div>
    <h1>Digital Skills</h1>
    <div class="containerskills">
      <div class="skills">
        <img :src="require('../assets/PS.png')" class="digital" />
        <div class="dots">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="halfdot"></span>
        </div>
      </div>
      <div class="skills">
        <img src="../assets/LR.png" class="digital" />
        <div class="dots">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="halfdot"></span>
        </div>
      </div>
      <div class="skills">
        <img src="../assets/PR.png" class="digital" />
        <div class="dots">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="emptydot"></span>
        </div>
      </div>
      <div class="skills">
        <img src="../assets/Figma.png" class="digital" />
        <div class="dots">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="halfdot"></span>
          <span class="emptydot"></span>
        </div>
      </div>
    </div>
    <div class="containerskills">
      <div class="skills">
        <img src="../assets/XD.png" class="digital" />
        <div class="dots">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="emptydot"></span>
        </div>
      </div>
      <div class="skills">
        <img src="../assets/AE.png" class="digital" />
        <div class="dots">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="emptydot"></span>
        </div>
      </div>
      <div class="skills">
        <img src="../assets/HTML.png" class="digital" />
        <div class="dots">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="emptydot"></span>
        </div>
      </div>
      <div class="skills">
        <img src="../assets/CSS.png" class="digital" />
        <div class="dots">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="emptydot"></span>
        </div>
      </div>
      <div class="skills">
        <img src="../assets/FlutterFlow.png" class="digital" />
        <div class="dots">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="emptydot"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "@/views/OQueFaco.css";

export default {
  name: "OQueFaco",
};
</script>
