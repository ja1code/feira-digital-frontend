<template>
  <div>
    <l-map
      ref="map"
      :min-zoom="minZoom"
      :crs="crs"
      style="height: 100vh;"
    >
      <l-image-overlay :url="url" :bounds="bounds" />
    </l-map>
  </div>
</template>

<script>
import { CRS } from "leaflet";
import { LMap, LImageOverlay, LMarker, LPopup, LPolyline } from "vue2-leaflet";

export default {
  name: 'mapa',
  components: {
    LMap,
    LImageOverlay,
    LMarker,
    LPopup,
    LPolyline
  },
  data () {
    return {
      url: "http://leafletjs.com/examples/crs-simple/uqm_map_full.png",
      bounds: [[-26.5, -25], [1021.5, 1023]],
      minZoom: -2,
      crs: CRS.Simple,
      travel: [[145.0, 175.2], [8.3, 218.7]]
    }
  }
}
</script>

<style>

</style>