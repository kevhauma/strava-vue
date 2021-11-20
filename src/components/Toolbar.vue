<template>
  <Toolbar class="glass toolbar">
    <template #left>
      <Button
        @click="toggleSidebar"
        v-if="sideBarBtn"
        class="p-button-text p-button-rounded"
      >
        sidebar
      </Button>
      <a href="/" class="title">
        <span>Strava Activity Map </span>
      </a>
    </template>

    <template #right>
      <a href="/about">
        <Button class="p-button-raised p-button-help"> More </Button>
      </a>
      <Button class="ml-2 p-button-text">
        <a href="https://github.com/kevhauma/strava-vue" target="_blank">
          <img alt="logo" src="/img/github.png" style="width: 1.5rem" />
        </a>
      </Button>
    </template>
  </Toolbar>
</template>
<script>
export default {
  data: () => ({}),
  props: {
    sideBarBtn: Boolean,
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggleSidebar", false);
    },
  },
};
</script>

<style scoped lang="scss">
.toolbar {
  z-index: 1;
  border: none;
}
.title {
  font-weight: 800;
  font-size: 2rem;
  color: black;
  &:hover {
    cursor: pointer;
  }
}
</style>
