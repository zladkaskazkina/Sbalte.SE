<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/packlists">Sbalte.se!</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
:root {
  --blue: #28527a;
  --bright-blue : #8ac4d0;
  --yellow: #f4d160;
  --bright-yellow: #fbeeac;
}

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;800&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-color: var(--blue);
  color: var(--bright-yellow);
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #f4d160;
    }
  }
}

.nadpis {
  background-color: #f4d160;
  line-height: 80px;
  font-size: 25px;
}
</style>
