<template>
  <div>
    <GoogleMap
      api-key="AIzaSyA1tY4aCNgOcazcBJ8ta0TJSqE7wHJtb14"
      style="width: 100%; height: 500px"
      :center="center"
      :zoom="15"
    >
      <Marker :options="{ position: center }" />
    </GoogleMap>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: -6.907709851995325, lng: 107.62187154009246 };

    return { center };
  },
});
</script>