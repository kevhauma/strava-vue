<template>
  <div class="app">
    <toolbar :sideBarBtn="sideBarBtn" @toggleSidebar="toggleSidebar" />
    <router-view class="route-view" :isSiderbarOpen="isSiderbarOpen" />
  </div>
</template>

<script>
import Toolbar from "@/components/Toolbar.vue";
export default {
  data: () => ({
    isSiderbarOpen: true,
    sideBarBtn: false,
  }),
  components: {
    Toolbar,
  },
  methods: {
    toggleSidebar() {
      this.isSiderbarOpen = !this.isSiderbarOpen;
    },
    routeLoaded() {
      this.sideBarBtn = this.$route.name === "View";
    },
  },
  watch: {
    $route() {
      this.$nextTick(this.routeLoaded);
    },
  },
};
</script>

<style lang="scss">
.app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.router-view {
  flex-grow: 1;
}
</style>
