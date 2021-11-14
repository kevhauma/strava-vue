<template>
  <div style="height:100%">
    <vs-navbar center-collapsed v-model="active">
        <template #left>
         Strava Map
        </template>
        <vs-navbar-item :active="active == 'guide'" id="guide">
          Guide
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'docs'" id="docs">
          Documents
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'components'" id="components">
          Components
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'license'" id="license">
          license
        </vs-navbar-item>
        <template #right>
          <vs-button flat >Login</vs-button>
          <vs-button>Get Started</vs-button>
        </template>
      </vs-navbar>
    <router-view style="height:100%"/>
  </div>
</template>
  <script>
  export default {
    data:() => ({
      active: 'guide'
    })
  }
  </script>

<style lang="scss">
body {
  height:100vh;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
