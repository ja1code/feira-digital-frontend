<template>
  <div>
    <l-map
      ref="map"
      :maxZoom="mapProps.maxZoom"
      :minZoom="mapProps.minZoom"
      :crs="mapProps.crs"
      style="height: 100vh;"
      :center="mapProps.center"
    >
      <l-marker :lat-lng="mapProps.userPosition"></l-marker>
      <l-marker :lat-lng="mapProps.userPosition"></l-marker>
      <div>
        <l-polyline
        :lat-lngs="lines"
        color="green"></l-polyline>
      </div>
      <l-image-overlay :url="mapProps.url" :bounds="mapProps.bounds"/>
    </l-map>
  </div>
</template>

<script>
import axios from 'axios'
import { CRS, latLng, Util } from "leaflet";
import { LMap, LImageOverlay, LMarker, LPopup, LPolyline, LTileLayer } from "vue2-leaflet";

export default {
  name: 'mapa',
  components: {
    LMap,
    LImageOverlay,
    LTileLayer,
    LMarker,
    LPopup,
    LPolyline
  },
  data () {
    return {
      mapProps: {
        url: "https://feira.digital/map.svg",
        bounds: [[0,0], [1000, 1000]],
        minZoom: -2,
        maxZoom: 1000,
        crs: CRS.Simple,
        center: [230, 220],
        userPosition: [125, 890]
      },
      lines: []
    }
  },
  methods: {
    xy (x, y) {
      if (Util.isArray(x)) {    // When doing xy([x, y]);
        return yx(x[1], x[0]);
      }
      return yx(y, x);  // When doing xy(x, y);
    },
    fetchInfo () {
      axios.post('http://localhost:4040/info')
      .then(x => {
        this.navigate(x.data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    navigate (data) {
      let x = data.inMap[1]
      let y = data.inMap[0]
      let route = []
      let tmp = [[this.mapProps.userPosition[0], this.mapProps.userPosition[1]], [y - 10, this.mapProps.userPosition[1]], [y - 10, x]]
      this.lines.push(tmp)
    }
  },
  mounted () {
    this.fetchInfo()
  }
}
</script>

<style>

</style>