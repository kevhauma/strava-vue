<template>
  <div style="height:100%">    
    <routemap style="height:100%" :coords="coordinates"/>
  </div>
</template>

<script>
import routemap from './routemap.vue';
import polyline from '@/utils/polyline';
import lines from '@/utils/dummyPolylines';
export default {
  name: 'mapWrapper',
  data: () => ({
    coordinates: lines.map(line=>polyline.decode(line,6))
  }),
  components: {
    routemap,
  },
};
</script>