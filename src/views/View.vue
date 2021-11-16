<template>
  <main class="main">
    <map-wrapper class="map" :isSiderbarOpen="isSiderbarOpen" />
  </main>
</template>

<script>
import MapWrapper from "../components/map/MapWrapper.vue";

export default {
  name: "View",
  data: () => ({}),
  props: {
    isSiderbarOpen: Boolean,
  },
  components: {
    MapWrapper,
  },
};
</script>

<style scoped>
.main {
  height: 100%;
  margin: 0;
}
</style>
