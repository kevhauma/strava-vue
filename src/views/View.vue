<template>
  <main class="main">
    <map-wrapper />
  </main>
</template>

<script>
import MapWrapper from "../components/map/mapWrapper.vue";

export default {
  name: "Home",
  data: () => ({}),
  components: {
    MapWrapper,
  },
};
</script>

<style scoped>
.main {
  height: 100%;
  margin: 0;
  position: relative;
}
</style>
