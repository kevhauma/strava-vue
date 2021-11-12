<template>
  <ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height: 100%">
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
            <ol-style-stroke :color="strokeColor" :width="strokeWidth"></ol-style-stroke>
          </ol-style>
        </ol-feature>
      </ol-source-vector>
    </ol-vector-layer>
  </ol-map>
</template>

<script>
export default {
  name: 'mapWrapper',
  data: () => ({
    center: [116.54875, 40.45064],
      projection: 'EPSG:4326',
      zoom: 17,
      rotation:0,
      radius:40,
      strokeWidth:10,
      strokeColor:'red',
  }),
  props:{
    coords: {type: Array}
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
