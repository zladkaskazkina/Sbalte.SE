<template>
  <div>
    <div @click="openList" class="tile">
      <img :src="require(`@/assets/${icon}`)" :alt="name">
      <span>
        {{name}}
      </span>
    </div>
  </div>
</template>
<script>

export default {
  name: "PackListTile",
  emits: ["choose-list"],
  components:{},
  props:["icon", "name"],
  data() {
    return {

    }
  },
  methods: {
    openList() {
      this.$emit("choose-list", this.name)
    }
  }
}
</script>
<style>
  .tile {
    display: flex;
    align-items: center;
  }
  .tile img {
    background-color: var(--bright-yellow);
    width: 80px;
  }
  .tile span {
    padding: 1rem;
    color: var(--bright-yellow);
    font-size: 1.2rem;
  }
</style>
