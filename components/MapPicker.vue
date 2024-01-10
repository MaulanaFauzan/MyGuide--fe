<template>
  <div style="height: 500px; width: 500px">
    <LMap @click="logPost" ref="map" :zoom="zoom" :center="leaflet.center">
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        layer-type="base"
        name="OpenStreetMap"
      />
      <l-marker :lat-lng="markerLatLng" ></l-marker>
    </LMap>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      zoom: ref(10),
      leaflet: {
        center: [-6.938218963741149,  107.60802840348335],
      },
      markerLatLng:[-6.938218963741149,  107.60802840348335]
    };
  },
  methods:{
    logPost(event){
      this.markerLatLng=event.latlng
      this.$emit('lnglt',this.markerLatLng)
    }
  },
  mounted() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.leaflet.center[0]=position.coords.latitude
      this.leaflet.center[1]=position.coords.longitude
    });
  },
};
</script>


<style>
body {
  margin: 0;
}
</style>