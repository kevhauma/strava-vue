<template>
  <routemap style="height: 100%" :coords="coordinates" :moving="moving" />
</template>

<script>
import routemap from "./routemap.vue";
import polyline from "@/utils/polyline";
import lines from "@/utils/dummyPolylines";
export default {
  name: "mapWrapper",
  data: () => ({
    coordinates: lines.map((line) => polyline.decode(line, 6)),
  }),
  props: { moving: Boolean },

  components: {
    routemap,
  },
};
</script>
