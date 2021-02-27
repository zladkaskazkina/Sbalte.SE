<template>
  <div>
    <input type="checkbox" :id="id" v-model="completed" @click="completeItem">
    <label :for="id"> {{ name }} </label>
  </div>
</template>
<script>

export default {
  name: "ListItem",
  emits: ["complete-item"],
  components:{},
  props:["id", "name"],
  data() {
    return {
      completed: false
    }
  },
  methods: {
    completeItem() {
      this.$emit("complete-item", this.id)
    }
  }
}
</script>
<style>
  
</style>