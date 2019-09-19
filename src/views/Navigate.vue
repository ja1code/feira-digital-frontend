<template>
  <div>
    <Map />
    <div class="qr-scanner-div">
      <button class="btn f-btn-full">Escanear código QR</button>
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

<style>
.qr-scanner-div {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  position: absolute;
  bottom: 0;
  z-index: 100000;
  padding-bottom: 10%;
}
</style>