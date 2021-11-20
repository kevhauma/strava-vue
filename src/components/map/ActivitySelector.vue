<template>
  <div class="glass" :class="sidebarClass">
    <div v-if="activities">
      <activity-entry
        v-for="activity in activities"
        :key="activity.id"
        :activityID="activity.id"
        :activity="activityDetail(activity)"
      />
    </div>
    <div v-if="!activities">
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
  }),
  mounted() {
    this.getNewActivityDetails();
  },
  components: {
    ActivityEntry,
  },
  props: {
    isSiderbarOpen: Boolean,
    activities: Array,
    config: Object,
  },
  methods: {
    getNewActivityDetails() {
      if (!this.activities) return;
      this.activities.forEach(async (act) => {
        console.log(act);
        let res = await fetch(
          `https://www.strava.com/api/v3/activities/${act.id}`,
          this.config
        );
        let data = await res.json();
        this.activityDetails.push(data);
      });
    },
  },
  computed: {
    sidebarClass() {
      return this.isSiderbarOpen ? "sidebar--open" : "siderbar--closed";
    },
    activityDetail(activity) {
      return this.activityDetails.find((act) => act.id === activity.id);
    },
  },
  watch: {
    activities() {
      this.getNewActivityDetails();
    },
  },
};
</script>
<style scoped lang="scss">
.sidebar {
  height: 100%;
  z-index: 1;
  overflow: hidden;
  transition: width 0.2s ease;
  &--open {
    width: 150px;
  }
  &--closed {
    width: 0;
  }
}
</style>
