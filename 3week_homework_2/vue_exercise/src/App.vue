<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/todo">To-do</router-link> |
    <router-link to="/gallery">Gallery</router-link>
  </nav>
  <router-view />
</template>
<script>
export default {}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;1,700&display=swap');
#app {
  font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3a1412;
  background-image: linear-gradient(
    45deg,
    #ff9a9e 0%,
    #fad0c4 99%,
    #fad0c4 100%
  );
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #b39275;
}

nav a.router-link-exact-active {
  /* color: #be9275; */
  color: #ed2d7b;
}
</style>
