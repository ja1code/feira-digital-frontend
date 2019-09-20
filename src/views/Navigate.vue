<template>
  <div>
    <b-modal id="qr" title="Escaneie um código qr" centered style="z-index: 1001 !important; position: relattive !important;">
      <q-r-scanner />
    </b-modal>
    <Map />
    <div id="header">
      A
    </div>
  </div>
</template>

<script>
import Map from '@/components/map/map'
import QRScanner from "@/components/qr/qr"
export default {
  name: "navigate",
  components: {
    Map,
    QRScanner
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
.f-input{
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25) !important;
}
.f-input:placeholder-shown{
  text-align: left;
}

#header {
  top: 0;
  right: 0;
  display: block;
  position: absolute;
  height: 20vh;
  width: 100%;
  background: #01baef;
  z-index: 1041;
}
</style>