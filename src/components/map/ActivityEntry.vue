<template>
  <div class="activity-entry">
    <div v-if="activityDetail" class="glass">
      <div class="activity-title">
        <i>{{ activityDetail.type.charAt(0) }}</i>
        <span>
          <strong>{{ activityDetail.name }}</strong>
        </span>
        <i :class="getFlag" />
      </div>
      <div class="activity-detail">
        <span>{{ formatDate(activityDetail.start_date_local) }}</span>
        <span>{{ formatDistance(activityDetail.distance) }}</span>
        <span>{{ formatTime(activityDetail.elapsed_time) }}</span>
        <span>{{ formatSpeed(activityDetail.average_speed) }}</span>
      </div>
    </div>
    <div v-if="!activityDetail">
      <div class="activity-title">
        <Skeleton width="40%" height="2rem" />
        <Skeleton width="10%" height="2rem" />
      </div>
      <div class="activity-detail">
        <Skeleton width="45%" height="2rem" />
        <Skeleton width="45%" height="2rem" />
        <Skeleton width="45%" height="2rem" />
        <Skeleton width="45%" height="2rem" />
      </div>
    </div>
  </div>
</template>

<script>
import flagDictionary from "@/utils/flagDictionary";
import { country_reverse_geocoding } from "country-reverse-geocoding";

export default {
  name: "ActivityEntry",
  data: () => ({
    internalLarge: true,
  }),
  mounted() {
    console.log(this.activityDetail);
  },
  props: {
    activityDetail: Object,
    displayDetails: Boolean,
  },
  methods: {
    formatSpeed(speed) {
      return `${speed.toFixed(2)}km/h`;
    },
    formatTime(seconds) {
      const h = Math.floor(seconds / 3600);
      const m = Math.floor((seconds % 3600) / 60)
        .toString()
        .padStart(2, "0");
      const s = Math.floor((seconds % 3600) % 60)
        .toString()
        .padStart(2, "0");

      const hDisplay = h > 0 ? `${h}h` : "";
      const mDisplay = h > 0 || m > 0 ? `${m}m` : "";
      const sDisplay = `${s}s`;
      return `${hDisplay}${mDisplay}${sDisplay}`;
    },
    formatDistance(meters) {
      const km = meters / 1000;
      return km < 1 ? `${Math.round(meters)}m` : `${km.toPrecision(2)}km`;
    },
    formatDate(date) {
      const d = new Date(date);
      const yyyy = d.getFullYear();
      const mm = (d.getMonth() + 1).toString().padStart(2, "0");
      const dd = d.getDate().toString().padStart(2, "0");

      return `${yyyy}-${mm}-${dd}`;
    },
  },
  computed: {
    getFlag() {
      const [lat, lng] = this.activityDetail.start_latlng;
      const country = country_reverse_geocoding().get_country(lat, lng);

      const flag_ = flagDictionary.find((fd) =>
        fd.country.toLowerCase().includes(country.name.toLowerCase())
      );

      return flag_ ? flag_.afeld : "";
    },
  },
  watch: {
    displayDetails(newVal) {
      this.internalLarge = newVal;
    },
  },
};
</script>

<style scoped lang="scss">
.activity-entry {
  margin-bottom: 3px;
  & > div {
    transition: transform linear 0.1s;
    &:hover {
      transform: scale(0.95, 0.95);
    }
  }
}
.activity-title {
  display: flex;
  flex-direction: row;
  padding: 4px;
  justify-content: space-between;
  & > i {
    width: 24px;
  }
  & > span {
    flex-grow: 1;
    text-decoration: underline;
    font-size: 1.05rem;
    text-align: center;
  }
}
.activity-detail {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  & * {
    min-width: 45%;
    padding: 4px;
  }
}
</style>
