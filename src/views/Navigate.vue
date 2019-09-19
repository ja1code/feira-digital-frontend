<template>
  <div>
    <h1 class="logo">Feira Digital</h1>
    <div class="f-bg">
      <h5>Selecione um pavilhão para navegar</h5>
      <img class="f-map" src="../components/map/map.svg" alt="">
      <p>
        ou 
      </p>
       <button class="f-btn">Escanear um código QR</button>
    </div>
      <div class="n-bottom">
        <h4>O que está procurando?</h4>
        <input type="text" name="input-prod" id="input-prod" placeholder="Ex: Iphone X 256gb" class="form-control f-input">
      </div> 
  </div>
</template>

<script>
import Map from '@/components/map/map2'
export default {
  name: "navigate",
  components: {
    Map
  }
}
</script>

<style scoped>
.n-bottom{
  margin-top: 10px;
  color: white;
  text-align: center; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
}
.f-btn{
  margin-bottom: 20px;
  font-size: 1.3rem;
  border-color: #01baef;
  color: #01BAEF;
}
h5{
  margin-top: 23px;
}
.logo{
  text-align: center;
  margin-bottom: 1%;
  color: white;
  font-size: 3.4rem !important;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, .2);
}
.f-map{
  margin-right: 20px;
  margin-left: 20px;
}
.f-bg{
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: gray;
  color: white;
  text-align: center; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
}
</style>