<template>
  <Card class="glass card shadow-8 py-4 px-2 select-none">
    <template #header>
      <Message v-if="errors" severity="error" :closable="false">
        {{ errors }}
      </Message>
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
      <a :href="stravalink">
        <Button
          type="button"
          class="p-button-outlined p-button-help strava-button"
        >
          <img alt="logo" src="/img/strava_black.png" style="width: 1.5rem" />
          <span class="strava-button-text"> Please log into Strava </span>
        </Button>
      </a>
    </template>
  </Card>
</template>

<script>
export default {
  name: "stravaLogin",
  data: () => ({
    stravalink: null,
  }),
  mounted() {
    const client_id = "43070";
    const responseURL = `${window.location.href.split("?")[0]}view`;
    const scope = "activity:read";

    this.stravalink = `http://www.strava.com/oauth/authorize?client_id=${client_id}&response_type=code&scope=${scope}&approval_prompt=force&redirect_uri=${responseURL}`;
  },
  props: { errors: Object },
};
</script>
<style scoped lang="scss">
.card {
  color: black;
  max-width: 500px;
  max-height: 800px;
  border-radius: 30px;
  //padding: 16px 8px;
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
  color: black;
}
</style>
