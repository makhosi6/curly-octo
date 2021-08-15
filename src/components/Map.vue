<template>
  <div id="map-container" class="map-container"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import { mapGetters } from "vuex";

export default {
  name: "Map",
  data() {
    return {
      lng: 18.5008116,
      lat: -33.876115,
      zoom: 9,
      accessToken:
        process.env.MAP_TOKEN ||
        "pk.eyJ1IjoibWFraG9zaWkiLCJhIjoiY2txMnB0dWdkMDV5bDJwdXMzZzdxZjZ2biJ9.iDiIYxSK5uHCJibuqc5K-w",
    };
  },
  computed: mapGetters(["allCoords"]),
  mounted() {
    mapboxgl.accessToken = this.accessToken;
    let map = new mapboxgl.Map({
      container: "map-container",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.lng, this.lat],
      zoom: this.zoom,
    });
    const nav = new mapboxgl.NavigationControl()
    ////
    map.addControl(nav, "top-right");
    map.on("move", () => {
      this.lng = map.getCenter().lng.toFixed(4);
      this.lat = map.getCenter().lat.toFixed(4);
      this.zoom = map.getZoom().toFixed(2);
    });
    //
    this.allCoords.features.map((i) => {
      const el = document.createElement("span");
      el.className = "marker";
      new mapboxgl.Marker(el)
        .setRotation(i.geometry.bearing)
        .setLngLat(i.geometry.coordinates)
        .addTo(map);
    });
  },
};
</script>
<style lang="scss">
.map-container {
  z-index: -1;
  position: unset !important;
  height: calc(100vh - 60px);
  top: 0;
  bottom: 60px;
  left: 0;
  right: 0;
  overflow: hidden !important;
  scrollbar-width: none !important;
  .marker {
    background-image: url("https://raw.githubusercontent.com/makhosi6/zealous-rain/main/src/img/ic_new_white_taxi.png");
    background-size: cover;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
  }
  .mapboxgl-ctrl-bottom-left,
  .mapboxgl-ctrl-bottom-right {
    display: none !important;
  }
}

</style>