<template>
  <div class="glass" :class="sidebarClass">
    <div v-if="activities.length > 0">
      <activity-entry
        v-for="activity in activities"
        :key="activity.id"
        :activityDetail="activityDetail(activity)"
        :displayDetails="isSiderbarOpen"
      />
    </div>
    <div v-if="internalLoading">
      <ProgressSpinner />
    </div>
  </div>
</template>

<script>
import ActivityEntry from "./ActivityEntry.vue";

export default {
  name: "ActivitySelector",
  data: () => ({
    activityDetails: [],
    internalActivities: [],
    internalLoading: false,
  }),
  mounted() {
    this.internalLoading = this.loading;
    this.internalActivities = this.activities;
    this.getNewActivityDetails();
  },
  components: {
    ActivityEntry,
  },
  props: {
    isSiderbarOpen: Boolean,
    loading: Boolean,
    activities: Array,
    config: Object,
  },
  methods: {
    async getNewActivityDetails() {
      if (!this.activities) return;
      if (this.activities.length === 0) this.internalLoading = false;
      for (const act of this.internalActivities) {
        let res = await fetch(
          `https://www.strava.com/api/v3/activities/${act.id}`,
          this.config
        );
        let data = await res.json();
        this.activityDetails.push(data);
        this.$emit("onRouteLoad", data);

        if (this.internalActivities.length === this.activityDetails.length) {
          this.internalLoading = false;
        }
      }
    },
    activityDetail(activity) {
      return this.activityDetails.find((act) => act.id === activity.id);
    },
  },
  computed: {
    sidebarClass() {
      return this.isSiderbarOpen ? "sidebar--open" : "sidebar--closed";
    },
  },
  watch: {
    activities(val) {
      this.internalActivities = [...val];
      this.getNewActivityDetails();
    },
    loading() {
      this.internalLoading = this.loading || this.internalLoading;
    },
  },
};
</script>
<style scoped lang="scss">
.sidebar {
  height: 100%;
  z-index: 1;
  transition: transform 0.2s ease;
  overflow-y: scroll;
  width: 350px;
  &--open {
    transform: translate(0px, 0px);
  }
  &--closed {
    transform: translate(-300px, 0px);
  }
}
</style>
