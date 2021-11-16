<template>
  <routemap style="height: 100%" :coords="coordinates" />
</template>

<script>
import routemap from "./routemap.vue";
import polyline from "@/utils/polyline";

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
    let res = await fetch(`${heroku}?code=${this.$route.query.code}`);
    let data = await res.json();
    if (data.errors) {
      console.error(data);
      return;
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
    this.coordinates = routesOverview.map((run) =>
      polyline.decode(run.map.summary_polyline, 6)
    );
  },
  props: { stravaCode: String },

  components: {
    routemap,
  },
};
</script>
