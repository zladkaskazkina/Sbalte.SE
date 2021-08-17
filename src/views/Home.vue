<template>
  <div class="home">
    <BaseButton> Sbalte se! </BaseButton>
    <img src="https://www.fi.muni.cz/~xhajna/logo_bright.png" />
  </div>
</template>

<script>
import BaseButton from "../components/BaseButton.vue";
export default {
  name: "Home",
  components: { BaseButton },
  data() {
    return {};
  },
  methods: {
    openLists() {},
  },
};
</script>

<style scoped>
  img {
    margin-top: 2rem;
    width: 100%;
    max-width: 400px;
  }
</style>
