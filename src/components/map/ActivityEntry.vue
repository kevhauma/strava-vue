<template>
  <div>
    <div v-if="activityDetail" class="glass">
      <p>{{ activityDetail.name }}</p>
      <i :class="getFlag" />
      <p>{{ activityDetail.distance }}m</p>
      <p>{{ activityDetail.type }}</p>
      <p>{{ activityDetail.elapsed_time }} seconds</p>
      <p>{{ activityDetail.average_speed }} km/h</p>
    </div>
    <div v-if="!activityDetail"><Skeleton width="100%" height="2rem" /></div>
  </div>
</template>

<script>
import flagDictionary from "@/utils/flagDictionary";
import { country_reverse_geocoding } from "country-reverse-geocoding";

export default {
  name: "ActivityEntry",
  data: () => ({}),
  mounted() {
    console.log(this.activityDetail);
  },
  props: {
    activityDetail: Object,
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
};
</script>

<style scoped>
.main {
  height: 100%;
  margin: 0;
}
</style>
