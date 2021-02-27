<template>
  <div class="container">
    <button class="button">
      <router-link to="/packlists" class="routerbutton">
        <slot> </slot>
      </router-link>
    </button>
  </div>
</template>
<script>
export default {
  name: "BaseButton",
  components: {},
  props: [],
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.button {
  font-family: 'Quicksand', sans-serif;
  background-color: var(--yellow);
  border: none;
  padding: 20px 32px;
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  cursor: pointer;
}
.routerbutton {
  text-decoration: none;
  color: var(--blue);
}
</style>