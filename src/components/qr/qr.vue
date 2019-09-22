<template>
<div>
  <qrcode-stream @decode="write"></qrcode-stream>
  <qrcode-drop-zone></qrcode-drop-zone>
  <qrcode-capture></qrcode-capture>
</div>
</template>

<script>
import { EventBus } from '@/assets/eventBus.js';
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'
export default {
  name: "QRScanner",
  components: {
    QrcodeStream,
    QrcodeDropZone,
    QrcodeCapture
  },
  methods: {
    write (value) {
      let a = JSON.parse(value).userPos
      if (a) {
        EventBus.$emit('newPOS', a)
      }
    }
  }
}
</script>

<style>

</style>