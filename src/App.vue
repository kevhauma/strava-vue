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
    isSiderbarOpen: false,
    sideBarBtn: false,
  }),
  components: {
    Toolbar,
  },
  mounted() {
    console.log(this.$route);
    this.sideBarBtn = ["View"].includes(this.$route.name);
  },
  methods: {
    toggleSidebar() {
      this.isSiderbarOpen = !this.isSiderbarOpen;
    },
  },
};
</script>

<style lang="scss">
body {
  height: 100vh;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: var(--surface-b);
  font-family: var(--font-family);
  font-weight: 400;
  color: var(--text-color);
}
.app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.router-view {
  flex-grow: 1;
}
</style>
