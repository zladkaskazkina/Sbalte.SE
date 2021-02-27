<template>
  <div>
    <div @click="openList" class="tile">
      <img :src="require(`@/assets/${icon}`)" :alt="name">
    </div>
  </div>
</template>
<script>

export default {
  name: "ListItem",
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
  
</style>
