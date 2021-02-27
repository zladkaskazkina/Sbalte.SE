<template>
  <div>
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
  background-color: var(--bright-yellow);
  border: dotted;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}
.routerbutton {
  text-decoration: none;
  color: var(--text-color);
}
</style>