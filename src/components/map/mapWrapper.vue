<template>
  <div class="wrapper">
    <route-selector
      class="sidebar"
      :routes="routes"
      @onRouteLoad="routeLoaded"
      @onRouteChange="routeChanged"
    />
    <route-map class="map" :coords="coordinates" />
  </div>
</template>

<script>
import RouteMap from "./RouteMap.vue";
import RouteSelector from "./RouteSelector.vue";

const heroku = "https://strava-code-to-token.herokuapp.com/strava";

let getConfig = {
  headers: {},
};

export default {
  name: "mapWrapper",
  data: () => ({
    coordinates: [],
    loading: false,
  }),
  async mounted() {
    this.loading = true;
    try {
      let res = await fetch(`${heroku}?code=${this.$route.query.code}`);
      let data = await res.json();
      if (data.errors) {
        throw new Error(data.errors);
      }
      const creds = {
        ac: data.access_token,
        id: data.athlete.id,
      };
      getConfig.headers.Authorization = `Bearer ${creds.ac}`;
      let routesOverviewRes = await fetch(
        `https://www.strava.com/api/v3/athletes/${creds.id}/activities?per_page=100`,
        getConfig
      );
      let routesOverview = await routesOverviewRes.json();
      this.routes = routesOverview;
      // this.coordinates = routesOverview.map((run) =>
      //   polyline.decode(run.map.summary_polyline, 6)
      // );
    } catch (e) {
      this.$router.push({
        name: "Home",
        params: { error: "Something went wrong, please try again" },
      });
    }
  },
  props: {
    isSiderbarOpen: Boolean,
  },
  components: {
    RouteMap,
    RouteSelector,
  },
};
</script>
<style scoped lang="scss">
.wrapper {
  display: flex;
  height: 100%;
  .map {
    flex-grow: 1;
    height: 100%;
  }
  .sidebar {
    width: 150px;
  }
}
</style>
