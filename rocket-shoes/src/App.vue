<template>
  <div id="app">
    <router-view/>
    <!-- <nav>
      <router-link to="/dashboard">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    
  </div>
</template>

<style>
#app {
  font-family: ubuntu, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  background-color: #333;
  background-image: url("assets/background.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
