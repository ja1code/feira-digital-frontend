<template>
  <div>
    <l-map
      ref="map"
      :min-zoom="mapProps.minZoom"
      :max-zoom="mapProps.maxZoom"
      :zoom="mapProps.zoom"
      :crs="mapProps.crs"
      style="height: 100vh;"
      :center="mapProps.center"
      @zoom="updateZoom()"
    >
      <l-marker v-if="mapProps.userPosition" :lat-lng="mapProps.userPosition"></l-marker>
      <div>
        <l-polyline
        :lat-lngs="lines"
        color="black"
        :weight="lineWt"></l-polyline>
      </div>
      <l-image-overlay :url="mapProps.url" :bounds="mapProps.bounds" />
    </l-map>
  </div>
</template>

<script>
import { EventBus } from '@/assets/eventBus.js';
import axios from 'axios'
import { CRS, latLng, Util, setView } from "leaflet";
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
      mapProps: {
        url: "https://feira.digital/mapv2.svg",
        bounds: [[0,0], [1000, 1000]],
        minZoom: -1,
        maxZoom: 3,
        zoom: -1,
        crs: CRS.Simple,
        center: [0, 500],
        userPosition: null
      },
      lines: [],
      lineWt: 10
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
    },
    newUsrPosition (pos, zoom, extra) {
      this.$refs.map.mapObject.flyTo(pos, zoom, extra)
    },
    updateZoom () {
      let zoom = this.$refs.map.mapObject.getZoom()
      if (zoom > 0) {
        this.lineWt = zoom * 9
      } else {
        this.lineWt = 9
      }

    }
  },
  mounted () {
    EventBus.$on('newPOS', (valor) => {
      this.mapProps.userPosition = valor

      this.newUsrPosition(valor, 2, {
        "animate": true,
        "pan": {
          "duration": 30
        }
      })

      //this.mapProps.center = valor

      this.navigate({
        inMap: [210, 199],
        irl: 'coords',
        name: 'bullshito',
        addr: '300/301'
      })
    })
  }
}
</script>

<style>

</style>