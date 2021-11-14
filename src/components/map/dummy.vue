<template>
  <div style="height: 100%"></div>
</template>

<script>
export default {
  name: "mapWrapper",
  props: {
    coords: { type: Array },
  },
  mounted() {
    console.log(this.coords);
  },
};
</script>
