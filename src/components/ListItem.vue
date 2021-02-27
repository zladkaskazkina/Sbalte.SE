<template>
  <div>
    <input type="checkbox" :id="id" v-model="completed" @click="completeItem">
    <label :class="{checked: completed}" :for="id" > {{ name }}</label>
  </div>
</template>
<script>

export default {
  name: "ListItem",
  emits: ["complete-item"],
  components:{},
  props:["id", "name", "count", "checked"],
  data() {
    return {
      completed: this.checked
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
  label {
    font-size: 1.3rem;
  }
  .checked {
    text-decoration: line-through;
    color: grey;
  }  
</style>