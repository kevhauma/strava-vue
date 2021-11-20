<template>
  <div>
    <div>
      <Card class="glass">
        {{ activityDetail.id }}
      </Card>
    </div>
    <div>loading</div>
  </div>
</template>

<script>
export default {
  name: "ActivityEntry",
  data: () => ({}),
  props: {
    activityId: Number,
    activityDetail: Object,
  },
};
</script>

<style scoped>
.main {
  height: 100%;
  margin: 0;
}
</style>
