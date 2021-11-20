<template>
  <div class="wrapper">
    <activity-selector
      class="sidebar"
      :activities="activities"
      :config="config"
      :isSiderbarOpen="isSiderbarOpen"
      @onRouteLoad="routeLoaded"
      @onRouteChange="routeChanged"
    />
    <route-map class="map" :coords="coordinates" />
  </div>
</template>

<script>
import RouteMap from "./RouteMap.vue";
import ActivitySelector from "./ActivitySelector.vue";

const heroku = "https://strava-code-to-token.herokuapp.com/strava";

export default {
  name: "MapWrapper",
  data: () => ({
    coordinates: [],
    loading: false,
    activities: [],
    config: { headers: {} },
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
      this.config.headers.Authorization = `Bearer ${creds.ac}`;
      let routesOverviewRes = await fetch(
        `https://www.strava.com/api/v3/athletes/${creds.id}/activities?per_page=100`,
        this.config
      );
      let routesOverview = await routesOverviewRes.json();
      this.activities = routesOverview;
      // this.coordinates = routesOverview.map((run) =>
      //   polyline.decode(run.map.summary_polyline, 6)
      // );
    } catch (e) {
      // this.$router.push({
      //   name: "Home",
      //   params: { error: "Something went wrong, please try again" },
      // });
    }
  },
  props: {
    isSiderbarOpen: Boolean,
  },
  components: {
    RouteMap,
    ActivitySelector,
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
}
</style>
