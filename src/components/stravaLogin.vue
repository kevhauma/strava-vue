<template>
  <Card class="card">
    <template #header>
      <div class="icon-wrapper">
        <img class="icon-img" alt="strava icon" src="/img/strava.png" />
      </div>
    </template>
    <template #title> Please log into Strava. </template>
    <template #content>
      <p>
        You will need to log into your strava account to be able to use this
        app.
      </p>
      <p>
        Note: We don't see your account login details, those will all be handled
        by Strava
      </p>
    </template>
    <template #footer>
      <Button type="button" class="p-button-outlined p-button-help">
        <img alt="logo" src="/img/strava.png" style="width: 1.5rem" />
        <span class="strava-button-text"> Please log into Strava </span>
      </Button>
    </template>
  </Card>
</template>

<script>
export default {
  name: "stravaLogin",
  data: () => ({}),
  props: {},
};
</script>
<style scoped lang="scss">
.card {
  max-width: 500px;
  max-height: 800px;
  border-radius: 30px;
}
.icon-img {
  width: 200px;
}
.icon-wrapper {
  padding: 16px;
  & > img {
    background-color: rgb(252, 82, 0);
    border-radius: 50%;
    padding: 16px;
  }
}
.strava-button-text {
  color: white;
}
</style>
