<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Domov</router-link> |
      <router-link to="/packlists">Sbalte se!</router-link> |
      <router-link to="/about">O nás</router-link>
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
  --text-color: black;
}

@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap");


#app {
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--bright-yellow);
}

body {
  background-color: var(--blue);
  color: var(--bright-yellow);
}

#nav {
  padding: 1rem;
  font-size: 25px;
  border-bottom: var(--yellow) dotted 5px;
  margin-bottom: 20px;

  @media only screen and (max-width: 1000px) {
    font-size: 20px;
  }

  a {
    font-weight: bold;
    color: var(--bright-yellow);

    &.router-link-exact-active {
      color: var(--yellow);
    }
  }
}

.nadpis {
  background-color: var(--yellow);
  color: var(--blue);
  line-height: 80px;
  font-size: 25px;
  margin: 5px;
}
</style>
