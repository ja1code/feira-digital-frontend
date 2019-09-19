<template>
  <div class="bg">
    <div id="logo-holder">
      <!-- <img src="@/assets/logo.png" alt="Feira digital"> -->
      <h1 id="logo">Feira Digital</h1>
    </div>
    <div id="controls">
      <h5>O que está procurando?</h5>
      <input class="form-control f-input" type="text" name="input-prod" id="input-prod" placeholder="ex: iPhone X 256gb">
      <button @click="search()" class="f-btn">Pesquisar</button>
      <h5>ou</h5>
      <button @click="$router.push('/nav')" class="f-btn">Navegar no mapa</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    search () { 
      this.$router.push('/search');
    }
  }
};
</script>

<style scoped>
  .bg {
    height: 100% !important;
    width: 100% !important;
    background: linear-gradient(359.58deg, #007799 0.17%, rgba(255, 255, 255, 0) 99.83%), #01BAEF;
    /* background-image: url('../assets/feira.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; */
    text-align: center; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
  }

  #logo {
    margin-bottom: 1%;
    color: white;
    font-size: 4.2rem !important;
    text-shadow: 3px 3px 3px rgba(0, 0, 0, .2);
  }

  #controls {
   color: white;
  }

  #controls input {
    margin-bottom: 5%;
  }


  #controls h5 {
    margin: 3% !important;
  }
</style>
