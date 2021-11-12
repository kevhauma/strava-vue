<template>
  <div style="height:100%">    
    <mapWrapper style="height:100%"/>
  </div>
</template>

<script>
import mapWrapper from '@/components/map/mapWrapper.vue';

export default {
  name: 'Home',
  components: {
    mapWrapper,
  },
};
</script>
