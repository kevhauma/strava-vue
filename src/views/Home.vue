<template>
  <main class="main">
    <div class="popover">
      <strava-login :errors="error" />
    </div>
    <routeMap :moving="true" :coords="[]" />
  </main>
</template>

<script>
import routeMap from "@/components/map/RouteMap.vue";
import stravaLogin from "@/components/StravaLogin.vue";

export default {
  name: "Home",
  data: () => ({
    display: true,
    error: null,
  }),
  mounted() {
    this.error = this.$route.params.error;
  },
  props: {
    errors: Object,
  },
  components: {
    routeMap,
    stravaLogin,
  },
};
</script>

<style scoped>
.main {
  height: 100%;
  margin: 0;
  position: relative;
}
.popover {
  position: absolute;
  z-index: 15;
  height: 100%;
  width: 100vw;
  background: rgba(15, 15, 15, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
