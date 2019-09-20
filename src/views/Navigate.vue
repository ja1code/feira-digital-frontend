<template>
  <div>
    <b-modal ref="qr" id="qr" title="Escaneie um código qr" centered style="z-index: 1001 !important; position: relattive !important;">
      <q-r-scanner />
    </b-modal>
    <Map />
    <div id="header">
      <h1 class="logo">Feira Digital</h1>
    </div>
    <div class="bottom">
      <h4>O que está procurando?</h4>
      <input type="text" name="input-prod" id="input-prod" class="f-input" placeholder="Ex: Iphone X 256gb">
    </div>
    <div class="btn">
      <p>ou</p>
      <button class="f-btn blue" v-b-modal.qr style="z-index: 999">Escanear código QR</button>
    </div>
  </div>
</template>

<script>
import Map from '@/components/map/map'
import QRScanner from "@/components/qr/qr"
import { EventBus } from '@/assets/eventBus.js';
export default {
  name: "navigate",
  components: {
    Map,
    QRScanner
  },
  mounted () {
    EventBus.$on('newPOS', () => {
      this.$refs['qr'].hide()
    })
  }
}
</script>

<style scoped>
.btn{
  width: 100%;
  bottom: 20%;
  right: 0;
  display: block; 
  position: absolute;
  color: #01BAEF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
}
.f-input{
  margin-left:auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
}
h4{
  text-align: center;
  margin-top: 5px;
  color: white;
}
.logo{
  text-align: center;
  margin-bottom: 1%;
  color: white;
  font-size: 3.4rem !important;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, .2);
}
#header {
  top: 0;
  right: 0;
  display: block;
  position: absolute;
  height: 11.7vh;
  width: 100%;
  background: #01baef;
  z-index: 1000;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, .3)
}
.bottom{
  bottom:0;
  right: 0;
  display: block;
  position: absolute;
  height: 15vh;
  width: 100%;
  background: #01baef;
  z-index: 1000;
}
</style>
