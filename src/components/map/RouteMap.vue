<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    class="mapbackground"
  >
    <ol-view
      ref="view"
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
    />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-vector-layer>
      <ol-source-vector>
        <ol-feature>
          <ol-geom-multi-line-string
            :coordinates="coords"
          ></ol-geom-multi-line-string>
          <ol-style>
            <ol-style-stroke
              :color="strokeColor"
              :width="strokeWidth"
            ></ol-style-stroke>
          </ol-style>
        </ol-feature>
      </ol-source-vector>
    </ol-vector-layer>
  </ol-map>
</template>

<script>
export default {
  name: "RouteMap",
  data: () => ({
    center: [-150, 10],
    projection: "EPSG:3857",
    zoom: 4,
    rotation: 0,
    radius: 40,
    strokeWidth: 10,
    strokeColor: "red",
    moving_interval: null,
  }),
  props: {
    coords: { type: Array },
    moving: Boolean,
  },
  mounted() {
    if (this.moving) {
      this.moving_interval = setInterval(() => {
        let [x, y] = this.center;
        x = x > 20026376.39 ? -20026376.39 : x + 2500;
        x += 10000;
        this.center = [x, y];
      }, 16);
    }
  },
  beforeUnmount() {
    if (this.moving_interval) clearInterval(this.moving_interval);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mapbackground {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
}
</style>
