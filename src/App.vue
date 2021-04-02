<template>
  <div id="app">
    <h1 class="logo">Bird's Pastebin</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/publish">Publish</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <br/>
    <beian/>
  </div>
</template>


<style>
#app {
  font-family: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h1.logo {
  user-select: none;
  font-size: 3rem;
}
</style>
<script>
import Beian from "@/components/Beian";
export default {
  components: {Beian}
}
</script>