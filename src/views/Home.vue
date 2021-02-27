<template>
  <div class="home">
    <BaseButton> Sbalte.se! </BaseButton>
    <img src="../assets/checklist.svg" />
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
    width: 300px;
    height: 400px;
}
</style>
