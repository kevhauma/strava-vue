<template>
  <main class="main">
    <div class="popover">
      <strava-login />
    </div>
    <mapWrapper :moving="true" />
  </main>
</template>

<script>
import mapWrapper from "@/components/map/mapWrapper.vue";
import stravaLogin from "@/components/stravaLogin.vue";

export default {
  name: "Home",
  data: () => ({
    display: true,
  }),
  components: {
    mapWrapper,
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
