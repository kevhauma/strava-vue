<template>
  <div style="height:100%">    
    <toolbar />

    <router-view style="height:100%"/>
  </div>
</template>
  <script>
  import Toolbar from '@/components/Toolbar.vue'
  export default {
    data:() => ({}),
components:{
  Toolbar
}
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
  margin: 0; height: 100%; overflow-x: hidden; overflow-y: auto; background-color:
var(--surface-b); font-family: var(--font-family); font-weight: 400; color:
var(--text-color);

}
</style>
