<template>
  <div class="bg">
    <div id="logo-holder">
      <!-- <img src="@/assets/logo.png" alt="Feira digital"> -->
      <h1 id="logo">Feira Digital</h1>
    </div>
    <div id="controls">
      <h5>O que está procurando?</h5>
      <input v-model="search" class="form-control f-input" type="text" name="input-prod" id="input-prod" placeholder="ex: iPhone X 256gb" @input="typeAhead">
      <div v-if="suggs" class="suggs">
        <div class='sugItem' v-for="sug in suggs" @click="setNav(sug.area)">
          <p>
            {{sug.nome}}
          </p>
        </div>
      </div>
      <button @click="searchAct()" class="f-btn">Pesquisar</button>
      <h5>ou</h5>
      <button @click="$router.push('/nav')" class="f-btn">Navegar no mapa</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: null,
      suggs: null
    };
  },
  sockets: {
    searchAnswer (data) {
      if (this.search) {
        this.suggs = data
      }
    }
  },
  methods: {
    searchAct () {
      this.$router.push('/search');
    },
    typeAhead (data) {
      if (this.search) {
        this.$socket.emit('search', (this.search))
      } else {
        this.suggs = []
      }
    },
    setNav (area) {
      this.$router.push({path: '/nav', area})
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

  .suggs {
    box-shadow: inset 5px -5px 5px rgba(0, 0, 0, .2) !important;
    background-color: white;
    color: black;
    margin-top: -6%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-bottom: 1%;
    margin-bottom: 5%;
  }

  .sugItem {
    text-align: left;
    padding-left: 2%;
    width: 100%;
    height: 30px;
  }
  .sugItem:hover {
    background-color: rgba(0, 0, 0, .2);
    cursor: pointer;
  }

  .sugItem:active {
    background-color: rgba(0, 0, 0, .2);
    cursor: pointer;
  }
</style>
