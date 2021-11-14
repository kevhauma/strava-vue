<template>
    <Card class="card">
    <template #header>
      <div class="icon-wrapper">
        <img class="icon-img" alt="strava icon" src="/img/strava.png">
      </div>
    </template>
    <template #title>
        Advanced Card
    </template>
    <template #content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
    </template>
    <template #footer>
        <Button icon="pi pi-check" label="Save" />
        <Button icon="pi pi-times" label="Cancel" class="p-button-secondary" style="margin-left: .5em" />
    </template>
    </Card>

</template>

<script>
export default {
  name: "stravaLogin",
  data: () => ({
   
  }),
  props: {
    
  }
};
</script>
<style scoped>
.card { max-width: 500px; max-height: 500px; } .icon-img{ width: 200px; }
.icon-wrapper{ padding: 16px; background-color:rgb(252, 82, 0); }

</style>