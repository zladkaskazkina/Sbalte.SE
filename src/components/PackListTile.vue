<template>
  <div class="tile">
    <img :src="icon" :alt="name">
  </div>
</template>
<script>

export default {
  name: "ListItem",
  components:{},
  props:["icon", "name"],
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>
<style>
  
</style>
